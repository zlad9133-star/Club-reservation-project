const form = document.getElementById("subscribeForm");
const msg = document.getElementById("formMsg");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const phone = data.get("phone");

  const phoneRegex = /^01[0125][0-9]{8}$/;
  if (!phoneRegex.test(phone)) {
    msg.style.color = "#ff4444";
    msg.textContent = "⚠️ رقم الموبايل غير صحيح";
    return;
  }
  msg.style.color = "#00ff88";
  msg.textContent = "✅ تم إرسال بياناتك بنجاح! هنكلمك قريب.";
  setTimeout(() => {
    const text = `اشتراك جديد%0Aالاسم: ${data.get("name")}%0Aالموبايل: ${phone}%0Aالباقة: ${data.get("plan")}`;
    window.open(`https://wa.me/201234567890?text=${text}`, "_blank");
  }, 800);

  form.reset();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "0.6s";
  observer.observe(card);
});
