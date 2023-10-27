
function validator(json) {
    if (!json) {
        return "JSON объект отсутствует.";
    }

    const requiredFields = ["TDtask_name", "TDtask_description", "TDtask_status", "TDtask_deadline", "TDtask_completed", "userId"];

    for (const field of requiredFields) {
        if (!(field in json) || json[field] === null || json[field] === undefined) {
            return field;
        }
    }

    return null; // JSON валиден
}

export default validator()