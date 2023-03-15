import { validateSync } from 'class-validator';

import { ValidationError } from './errors';

export class BaseModel {
  constructor(kwargs) {
    const error: object = {};
    for (const key in kwargs) {
      this[key] = kwargs[key];
    }
    validateSync(this).forEach((err) => {
      error[err.property] = err.constraints;
    });

    if (error && Object.keys(error).length > 0) {
      throw new ValidationError(error);
    }
  }
}
