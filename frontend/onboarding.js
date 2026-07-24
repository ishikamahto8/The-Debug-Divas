document.addEventListener('DOMContentLoaded', () => {
    console.log("Onboarding logic initialized.");
    
    // Add logic to uncheck "None" if other diseases are checked, or uncheck others if "None" is checked
    const diseaseCheckboxes = document.querySelectorAll('input[name="disease"]');
    const noneCheckbox = document.querySelector('input[name="disease"][value="none"]');

    if(noneCheckbox) {
        diseaseCheckboxes.forEach(cb => {
            cb.addEventListener('change', (e) => {
                if (e.target.value === 'none' && e.target.checked) {
                    // Uncheck all others
                    diseaseCheckboxes.forEach(otherCb => {
                        if (otherCb.value !== 'none') {
                            otherCb.checked = false;
                        }
                    });
                } else if (e.target.value !== 'none' && e.target.checked) {
                    // Uncheck 'none'
                    noneCheckbox.checked = false;
                }
            });
        });
    }
});
