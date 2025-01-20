import { useEffect, useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { setUser, clearUser } from '../redux/userSlice'; 

// Hook personnalisé pour gérer le profil utilisateur
export const useUserProfile = () => {
    // Sélection des données utilisateur et token depuis le store Redux
    const { user, isAuthenticated, token } = useSelector(state => state.user);
    const dispatch = useDispatch(); // Initialisation de dispatch pour envoyer des actions

    // État local pour gérer le mode d'édition, le champ de modification du nom d'utilisateur et les erreurs
    const [isEditing, setIsEditing] = useState(false); // Indique si l'utilisateur est en mode édition
    const [editUserName, setEditUserName] = useState(''); // Stocke le nom d'utilisateur modifiable
    const [error, setError] = useState(null); // Stocke les messages d'erreur

    // Effet pour récupérer les informations utilisateur lorsque le composant est monté ou le token change
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`, // En-tête d'autorisation avec le token
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch profile'); // Gère les erreurs de réponse
                }

                const data = await response.json(); // Récupère les données JSON
                dispatch(setUser({ // Met à jour le state Redux avec les données utilisateur
                    firstName: data.body.firstName,
                    lastName: data.body.lastName,
                    userName: data.body.userName || '', // Utilise une chaîne vide si userName est manquant
                    token
                }));
                setEditUserName(data.body.userName || ''); // Initialise le champ de modification du nom d'utilisateur
            } catch (error) {
                setError('Error fetching user profile'); // Définit un message d'erreur
                dispatch(clearUser()); // Efface l'utilisateur du state Redux
            }
        };

        if (token) {
            fetchUserProfile(); // Appelle la fonction si le token est disponible
        }
    }, [dispatch, token]); // Dépendances de l'effet pour éviter les appels redondants

    // Gère les changements dans le champ de modification du nom d'utilisateur
    const handleUserNameChange = (e) => setEditUserName(e.target.value);

    // Annule l'édition en réinitialisant le champ et en sortant du mode édition
    const handleCancel = () => {
        setIsEditing(false);
        setEditUserName(user?.userName || ''); // Réinitialise avec le nom actuel ou une chaîne vide
    };

    // Sauvegarde le nouveau nom d'utilisateur via une requête PUT
    const handleSave = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ userName: editUserName }) // Envoie le nouveau nom d'utilisateur
            });

            if (!response.ok) {
                throw new Error('Failed to update profile'); // Gère les erreurs de mise à jour
            }

            const data = await response.json(); // Récupère les données de la réponse
            dispatch(setUser({ // Met à jour le state avec le nouveau nom d'utilisateur
                ...user,
                userName: editUserName,
                token
            }));
            setIsEditing(false); // Sort du mode édition
        } catch (error) {
            setError('Error updating profile'); // Définit un message d'erreur en cas d'échec
        }
    };

    // Retourne toutes les variables et fonctions nécessaires au composant
    return {
        user,
        isAuthenticated,
        isEditing,
        editUserName,
        error,
        setIsEditing,
        handleUserNameChange,
        handleCancel,
        handleSave
    };
};

export default useUserProfile;