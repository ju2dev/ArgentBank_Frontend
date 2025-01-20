import React from 'react'; 
import Navigation from '../../components/NavBar/Nav';
import Footer from '../../components/Footer/footer';
import UserWelcome from '../../components/User/UserWelcome'; 
import UserEditForm from '../../components/User/UserEditForm'; 
import AccountSection from '../../components/Account/account'; 
import useUserProfile from '../../hooks/useUserProfile'; 
import '../../components/User/User.min.css'; 

const UserPage = () => {
     // Extraction des données et fonctions depuis le hook useUserProfile
    const {
        user,
        isAuthenticated,
        isEditing,
        editUserName,
        error,
        setIsEditing,
        handleUserNameChange,
        handleCancel,
        handleSave
    } = useUserProfile();

    // Redirection ou message si l'utilisateur n'est pas authentifié
    if (!isAuthenticated) {
        return <div>You need to sign in first</div>; // Message d'invitation à se connecter
    }

    // Affichage d'un message de chargement si les données utilisateur ne sont pas encore disponibles
    if (!user) {
        return <div>Loading user profile...</div>; // Indique que les données sont en cours de récupération
    }

    return (
        <div className="user-page">
            <Navigation isAuthenticated={isAuthenticated} userName={user.userName} />
            <main className="main bg-dark">
                {error && <div className="error-message">{error}</div>}
                
                {!isEditing ? (
                    <UserWelcome 
                        firstName={user.firstName}
                        lastName={user.lastName}
                        onEdit={() => setIsEditing(true)}
                    />
                ) : (
                    <UserEditForm 
                        editUserName={editUserName}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        onSubmit={handleSave}
                        onChange={handleUserNameChange}
                        onCancel={handleCancel}
                    />
                )}

                <h2 className="sr-only">Accounts</h2>
                <AccountSection
                    title="Argent Bank Checking (x8349)"
                    amount="$2,082.79"
                    description="Available Balance"
                />
                <AccountSection
                    title="Argent Bank Savings (x6712)"
                    amount="$10,928.42"
                    description="Available Balance"
                />
                <AccountSection
                    title="Argent Bank Credit Card (x8349)"
                    amount="$184.30"
                    description="Current Balance"
                />
            </main>
            <Footer />
        </div>
    );
};

export default UserPage;