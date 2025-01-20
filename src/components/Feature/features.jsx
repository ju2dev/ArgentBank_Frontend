import chatIcon from '../../assets/img/icon-chat.png';
import moneyIcon from '../../assets/img/icon-money.png';
import securityIcon from '../../assets/img/icon-security.png';
import './features.min.css';

const Features = () => {
  const features = [
    {
      icon: chatIcon,
      title: 'You are our #1 priority',
      description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
    },
    {
      icon: moneyIcon,
      title: 'More savings means higher rates',
      description: 'The more you save with us, the higher your interest rate will be!'
    },
    {
      icon: securityIcon,
      title: 'Security you can trust',
      description: 'We use top of the line encryption to make sure your data and money is always safe.'
    }
  ];

  // Fonction locale pour rendre chaque feature item
  const FeatureItem = ({ icon, title, description }) => (
    <div className="feature-item">
      <img src={icon} alt={title} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <section className="features">
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </section>
  );
};

export default Features;