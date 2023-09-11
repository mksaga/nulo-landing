let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
});

const NULO_FEE = 90;
const COMPARISON_CARD_CHARGE = 0.025;

document.addEventListener("DOMContentLoaded", () => updateUI())
document.getElementById("monthlyVolumeSlider").addEventListener("change", (event) => updateUI())
document.getElementById("monthlyFees").addEventListener("change", (event) => updateUI())

function updateUI() {
    let volume = document.getElementById("monthlyVolumeSlider").value;
    let monthlyFees = document.getElementById("monthlyFees").value;

    let intVolume = parseInt(volume);

    let intCardFees = COMPARISON_CARD_CHARGE * intVolume;
    let intMonthlyFees = parseInt(monthlyFees);

    let totalFees = intCardFees + intMonthlyFees;
    let savings = totalFees - NULO_FEE;

    document.getElementById("potentialSavings").textContent = `${USDollar.format(savings)}/month`;
    document.getElementById("monthlyVolumeAmount").textContent = `${USDollar.format(intVolume)}`;
    document.getElementById("currentCost").textContent = `${USDollar.format(totalFees)}`;
}
