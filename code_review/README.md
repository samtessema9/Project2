# Code Review
Welcome to Code Review! This application provides a convenient platform for reviewing your code and gaining valuable insights. Whether you have a specific piece of code that needs feedback or an entire codebase hosted on GitHub, this app has got you covered. With the flexibility to paste or provide GitHub links, you can seamlessly integrate your code into the review process. The powerful OpenAI API performs a comprehensive code review, analyzing coding style, potential issues, and areas for improvement. You can ask questions about your code and receive detailed responses to gain valuable feedback.
## How to Use
1.  Open the Code Review App in your web browser. (https://code-reviewer.onrender.com/)(https://samtessema9.github.io/Project2/)
2. Choose one of the following options:
    -   **Paste or Write Code**: If you want to review a specific piece of code, simply paste or write it in the provided code editor on the app's homepage. Then click one of the buttons to initiate the review.
    -   **Provide GitHub Link**: If your code is hosted on GitHub, enter the repository URL or file URL in the input field in the github tab and click submit to initiate the review.
3. The app will provide feedback and suggestions based on the code review performed by the OpenAI API.
4. You can then ask fololw up questions in the input field next to the response and click the "Ask" button to ask further questions about your code.
5. You can continue to review and ask questions about the code as needed.

## Technologies used
- **React:** I utilized React along with state management techniques to build a modular and component-based user interface, ensuring efficient data flow and state management within my project.
- **CSS/Bootstrap:** I used CSS and Bootstrap to style and structure the visual elements of my application, ensuring a modern and responsive design.
- **JavaScript:** I utilized JavaScript as the primary programming language to implement the logic and enable interactive features in my project.
- **Github API:** I integrated the GitHub API to fetch code files from repositories, allowing users to provide GitHub links for code review and analysis.
- **OpenAI API:** I leveraged the OpenAI API's natural language processing capabilities to generate insightful responses and provide code-related feedback to users' questions and queries.
## Approach Taken
I adopted an unstructured and test-driven approach throughout the development of this project. It allowed me to explore different ideas and test each component individually, ensuring high code quality and functionality. I built out the separate pieces independently, focusing on modularity and reusability. Towards the end, I integrated the components together, establishing data flow and ensuring seamless communication. This approach enabled me to gradually construct the application's features and bring everything together into a cohesive and functional system.
## Unsolved Problems / Upcoming Features
- **Large Repo handling:** To address the input size limitations of the OpenAI API, an upcoming addition to the project will involve breaking down large GitHub repositories into smaller code chunks. By splitting the code into manageable segments, it will be possible to send them separately to the OpenAI API for processing and analysis. This approach ensures that the app is able to process and review large repositories. 
- **Chat history:** Another unresolved challenge in the project is implementing a feature that allows users to view the history of their code review chats. This functionality would enable users to revisit previous conversations and reference the questions and answers exchanged during the code review process.
## Toughest challenges
- **Recursive file access:** Navigating and accessing files within a repository posed a complex challenge, requiring effective algorithms for traversing nested directories and retrieving code files for analysis.
- **State management across files:** Managing state consistently across multiple components and modules required careful design and implementation of data flow and synchronization.
- **Rendering efficiency:** Ensuring efficient UI updates and minimizing unnecessary re-renders were crucial challenges in providing a smooth and responsive user experience.
