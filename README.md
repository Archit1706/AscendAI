# Ascend.ai: Elevate Your Interview Skills with AI

Welcome to Ascend.ai, your ultimate platform for mastering interview skills, enhancing communication, and boosting confidence. Whether you're a job seeker, a professional, or a student preparing for interviews, Ascend.ai is your AI-driven partner for interview success.

## Table of Contents

-   [Problem Statement](#problem-statement)
-   [Key Features](#key-features)
-   [Technology Stack](#technology-stack)
-   [Flow Charts](#flow-charts)
-   [Getting Started](#getting-started)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)

## Problem Statement

In today's competitive job market, effective communication during interviews is paramount. Employers not only seek expertise but also evaluate communication skills, facial expressions, and confidence. Ascend.ai addresses this challenge by providing a platform that empowers users to improve their communication and interview skills through AI-driven analysis.

## Key Features

### 1. Comprehensive Interview Analysis

-   Ascend.ai offers a deep dive into your interview performance.
-   It analyzes facial expressions, tone, pitch, and more to provide a holistic view of your readiness.

### 2. Real-time Tone and Pitch Feedback

-   Get instant feedback on your tone and pitch during interview practice.
-   Ensure you project confidence and professionalism in real time.

### 3. Facial Expression Analysis

-   Ascend.ai's facial expression analysis system assesses your emotional responses during interviews.
-   Help convey the right emotions with your expressions.

### 4. Video Mock Interview Review

-   Review your recorded video mock interviews with precise timestamps.
-   Identify specific areas for improvement and fine-tune your performance.

### 5. Personalized Interview Progress Dashboard

-   Use the personalized dashboard to track your interview preparation progress.
-   Receive AI-powered recommendations for improvement tailored to your needs.

### 6. AI-Driven Chatbot Guidance

-   Engage with our AI chatbot that poses interview questions and analyzes your responses.
-   Receive valuable suggestions to enhance your interview readiness anytime.

## Technology Stack

Ascend.ai leverages a robust technology stack to deliver its AI-driven features:

-   **Frontend**: Next.js and Tailwind CSS for a responsive and user-friendly interface.
-   **Database**: MongoDB for data storage and Prisma for database connections.
-   **Facial Expression Analysis**: Model: OpenCV + ResNet | Dataset: Facener Dataset.
-   **Tone and Pitch Analysis**: Datasets: RAVDESS Emotional speech audio, Toronto emotional speech set (TESS), CREMA-D Datasets | Models: LIBROSA + 1DCNN
-   **Chatbot**: Vector DB: Qdrant | LLM: mistral 8x7b | Dataset: scraped 30 different websites for Interview Related Questions.
-   **Video Recording and Playback**: WebRTC for recording video and Video.js for video playback with timestamps.
-   **User Authentication and Authorization**: Clerk

## Flow Charts

- **Birds Eye View**

![image](https://github.com/user-attachments/assets/83fac9d1-cfa6-4bb5-adce-1dc367f4feac)

- **Website Frontend Flow**

![image](https://github.com/user-attachments/assets/64ac0131-fea4-48dd-9e5a-76bb682b1740)

- **Website Backend and API Flow**

![image](https://github.com/user-attachments/assets/42cc8698-9a6f-4b9c-92a8-1432493f277e)

## Getting Started

Follow these steps to get Ascend.ai up and running locally:

1. Clone the repository.
2. Install the required dependencies.
3. Configure the database and authentication settings.
4. Start the development server.

For detailed instructions, please refer to the [Installation Guide](/docs/installation.md).

## Usage

-   Create an account or log in to Ascend.ai.
-   Access the dashboard to monitor your progress.
-   Engage with the AI chatbot to practice interview questions.
-   Review your video mock interviews with detailed timestamps.
-   Improve your interview skills and readiness with AI-driven feedback.

For a more in-depth guide, please check the [User Guide](/docs/user-guide.md).

## Contributing

We welcome contributions to Ascend.ai. If you'd like to contribute to the development, Open PRs and we will review them!

## License

This project is licensed under the [MIT License](LICENSE).
