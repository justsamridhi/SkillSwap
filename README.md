# SkillSwap

A modern skill-sharing community platform that connects learners and mentors in a collaborative environment where people can teach what they know and learn what they love - together.

![React](https://img.shields.io/badge/React-19.1.0-blue)
![Firebase](https://img.shields.io/badge/Firebase-11.10.0-orange)
![Vite](https://img.shields.io/badge/Vite-7.0.4-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.5-blue)

## 🌟 About

SkillSwap is a community-driven platform designed to facilitate peer-to-peer learning and knowledge exchange. Whether you're looking to teach a skill you've mastered or learn something new, SkillSwap connects you with like-minded individuals in your community.

**Live Demo:** [skill-swap-pied-three.vercel.app](https://skill-swap-pied-three.vercel.app)

## ✨ Features

### Core Functionality
- **User Authentication**: Secure signup and login system powered by Firebase Auth
- **Profile Management**: Create comprehensive profiles showcasing skills you can teach and want to learn
- **Smart Matching**: Advanced dashboard to discover users with complementary skills
- **Skill Exchange Requests**: Send and manage connection requests with other users
- **Real-time Chat**: Built-in messaging system for seamless communication
- **Availability Tracking**: Set and filter by availability preferences (weekdays, weekends, evenings, flexible)

### User Experience
- **Responsive Design**: Optimized for all devices using TailwindCSS
- **Interactive Animations**: Enhanced user experience with GSAP animations
- **3D Background Elements**: Immersive Three.js powered visual effects
- **Modern UI Components**: Clean, intuitive interface with React Icons

### Community Features
- **Connection Management**: Track incoming and outgoing skill swap requests
- **Status Updates**: Monitor request statuses (pending, accepted, declined)
- **Profile Discovery**: Browse and search through community member profiles
- **Skill Categorization**: Organized skill listings for easy navigation

## 🛠️ Technology Stack

### Frontend
- **React 19.1.0** - Modern UI framework
- **React Router DOM 7.6.3** - Client-side routing
- **React Hook Form 7.60.0** - Form handling and validation
- **TailwindCSS 3.3.5** - Utility-first CSS framework
- **GSAP 3.13.0** - Animation library
- **Three.js 0.178.0** - 3D graphics and animations
- **React Icons 5.5.0** - Icon components

### Backend & Services
- **Firebase 11.10.0** - Authentication and real-time database
- **Firestore** - NoSQL cloud database for user data and skill exchanges

### Development Tools
- **Vite 7.0.4** - Fast build tool and dev server
- **ESLint** - Code linting and quality assurance
- **PostCSS & Autoprefixer** - CSS processing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Firebase account for backend services

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/justsamridhi/SkillSwap.git
   cd SkillSwap
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Configuration**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore Database
   - Update the Firebase configuration in `src/firebase.js` with your project credentials

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint code analysis
```

## 🎯 How SkillSwap Works

### 1. **Create Your Profile**
Set up your profile in just 2 minutes. Showcase the skills you want to teach and the ones you want to learn.

### 2. **List Your Skills**
Add both teaching and learning skills. From coding to cooking, every skill matters in our community.

### 3. **Connect & Swap**
Get matched with perfect skill partners and start exchanging knowledge through our integrated chat system.

## 📱 Key Pages & Components

### Pages
- **Home (`/`)** - Landing page with platform overview
- **Signup (`/signup`)** - User registration
- **Login (`/login`)** - User authentication
- **Profile Setup (`/profilesetup`)** - Initial profile configuration
- **User Profile (`/userprofile`)** - Profile management
- **Dashboard (`/dashboard`)** - Discover and search users
- **My Swap (`/myswap`)** - Manage connections and requests
- **My Chat (`/mychat`)** - Communication hub

### Components
- **Navbar** - Navigation component with user authentication state
- **VantaBackground** - Animated 3D background effects

## 🗄️ Project Structure

```
SkillSwap/
├── public/                 # Static assets
├── src/
│   ├── Components/         # Reusable React components
│   │   ├── Navbar.jsx
│   │   └── VantaBackground.jsx
│   ├── Pages/              # Application pages
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── MyChat.jsx
│   │   ├── MySwap.jsx
│   │   ├── ProfileSetup.jsx
│   │   ├── Signup.jsx
│   │   └── UserProfile.jsx
│   ├── assets/             # Images and static files
│   ├── App.jsx             # Main application component
│   ├── firebase.js         # Firebase configuration
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # TailwindCSS configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## 🔐 Security Features

- **Firebase Authentication** - Secure user authentication
- **Firestore Security Rules** - Database access control
- **Input Validation** - Form validation using React Hook Form
- **Route Protection** - Protected routes for authenticated users

## 🎨 Design Philosophy

SkillSwap embraces a modern, clean design approach with:
- **Intuitive Navigation** - Easy-to-use interface for all skill levels
- **Responsive Layout** - Seamless experience across devices
- **Accessibility** - Inclusive design following web accessibility standards
- **Visual Appeal** - Engaging 3D elements and smooth animations

## 🤝 Contributing

We welcome contributions to make SkillSwap even better! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style and structure
- Add meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📈 Future Enhancements

- [ ] **Video Call Integration** - Built-in video conferencing for remote skill sessions
- [ ] **Rating & Review System** - Community feedback and skill validation
- [ ] **Skill Verification** - Badge system for verified expertise
- [ ] **Group Sessions** - Multi-user skill sharing sessions
- [ ] **Mobile App** - Native mobile applications
- [ ] **Advanced Matching Algorithm** - AI-powered skill recommendations
- [ ] **Calendar Integration** - Schedule and manage skill exchange sessions
- [ ] **Progress Tracking** - Monitor learning journey and achievements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Original concept inspired by the growing need for community-driven learning
- Built with modern web technologies for optimal performance
- Thanks to all contributors and beta testers

## 📞 Support

If you encounter any issues or have questions:
- **GitHub Issues**: [Create an issue](https://github.com/justsamridhi/SkillSwap/issues)
- **Email**: Contact the repository owner through GitHub

---

**Join the SkillSwap community today and start your collaborative learning journey!** 🚀

*Made with ❤️ by the SkillSwap community*