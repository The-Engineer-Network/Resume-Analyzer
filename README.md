# 🧠 Resume Analyzer
A web application that helps job seekers analyze their resumes for ATS compatibility, keyword optimization, and formatting quality, giving personalized feedback to improve their chances of getting interviews.

## 🚀 Features
- Upload or paste your resume text

- Analyze keywords and missing job-related terms

- Highlight structural or formatting issues

- Suggest improvements for better ATS ranking

- Store user analysis history (optional)

## 🛠️ Tech Stack

### Frontend
- React + TypeScript

- TailwindCSS

- Axios (for API requests)

### Backend
- Node.js + Express

- MongoDB (Mongoose ODM)

- OpenAI API or custom logic for analysis (later phase)

## 📂 Folder Structure
```bash
resume-analyzer/
│
├── client/       # React + TypeScript + Tailwind
├── server/       # Node.js + Express + MongoDB
├── README.md     # Project overview and setup guide
└── .gitignore
```

## 🧑🏽‍💻 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/The-Engineer-Network/Resume-Analyzer.git
cd resume-analyzer
```
### 2. Install dependencies
#### Frontend
```bash
cd client
npm install
```
#### Backend
```bash
cd server
npm install
```
### 3. Run the app
#### Run the backend
```bash
cd server
npm run dev
```
#### Run the frontend
In a new terminal:
```bash
cd client
npm run dev
```
Backend will run on http://localhost:5000  
Frontend will run on http://localhost:5173

## ⚙️ Environment Variables
Create a .env file in the server/ directory based on .env.example:
```ini
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
## 👥 Contributing
1. Fork the repo or create a feature branch:
```bash
git checkout -b feature/your-feature-name
```
2. Make your changes
3. Commit and Push
```bash
git commit -m "Added new feature"
git push origin feature/your-feature-name
```
4. Open a **Pull Request** to the ```main``` branch

## 📜 License
This project is open-source under the [MIT License](https://www.mit.edu/~amini/LICENSE.md)
## 🌟 Acknowledgments
Built by the **The Engineer Network / Resume Analyzer** team with ❤️  
Team Lead: **Habeebah Aleilo** (QueenHabeebah) 👑