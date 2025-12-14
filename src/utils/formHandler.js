/**
 * Saves dummy data as JSON to the console to simulate a backend submission.
 * @param {Object} data - The form data to save.
 * @param {string} formName - The name of the form being submitted.
 */
export const saveDummyData = (data, formName) => {
    const jsonData = JSON.stringify(data, null, 2);
    console.group(`[Dummy Save] ${formName}`);
    console.log('Timestamp:', new Date().toISOString());
    console.log('Payload:', JSON.parse(jsonData));
    console.groupEnd();
    
    // Optional: Alert for immediate visual feedback if console isn't open
    // alert(`[Dummy Save] ${formName} submitted!\nCheck console for JSON payload.`);
};
