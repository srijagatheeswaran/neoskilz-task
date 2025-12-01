# Mini LMS + Resume Score Checker

## ✅ Logic Used

### **Course Listing**
- 3 dummy courses are stored in an array.
- Each course shows **name, duration, image, and a "View Details" button**.
- Clicking the button opens a modal using React state to show full details.

### **Resume Score Checker**
- Uses React state to store **resume text, job title, score, loading, and errors**.

#### **Validation**
- Job title is required.  
- Resume must have at least **10 words**.

#### **Scoring**
- +50 if resume contains the job title.  
- +10 each for keywords: **experience, skills, project**.  
- Final score is **scaled to 100**.

#### **Extra Logic**
- Dynamic score messages.  
- Score color based on score value.  
- Word count is calculated.

---

## 🚀 How to Run the Code

```bash
npm install
npm run dev
