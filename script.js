const form = document.getElementById("rechargeForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const coins = document.getElementById("coins").value;

  if (!username || !coins) {
    alert("Please fill all fields");
    return;
  }

  result.classList.remove("hidden");
  result.innerHTML = `
    ✅ <strong>Recharge Successful (Simulation)</strong><br><br>
    👤 User: <b>${username}</b><br>
    💰 Coins Added: <b>${coins}</b><br><br>
    ⏳ Processing complete.<br>
    <small>(No real transaction occurred)</small>
  `;

  form.reset();
});