import { validateFields } from '../shared/utils';

function validateRequest(requiredFields) {
  return (req, res, next) => {
    const validation = validateFields(requiredFields, req.body);
    if (!validation.isValid) {
      return res.status(400).json({ success: false, message: validation.error });
    }
    next();
  };
}

module.exports = validateRequest;