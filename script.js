const logs = [
    {
      date: "2025-07-27",
      topic: "📚 Introduction to AI and Machine Learning",
      summary: "Learned about AI vs ML vs Deep Learning. Read about supervised, unsupervised, and reinforcement learning."
    },
    {
      date: "2025-07-28",
      topic: "📘 Linear Regression",
      summary: "Studied the math behind linear regression, cost function, gradient descent, and implemented it using Python."
    }
  ];
  
  const logList = document.getElementById("log-list");
  
  logs.forEach(log => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${log.date} - ${log.topic}</strong><br>${log.summary}`;
    logList.appendChild(li);
  });
  