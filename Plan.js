const yup = require('yup')

/**
 * Represents a plan that users can purchase in Magny
 * @class
 */
class Plan {

    /**
     * Schema to validate the object
     */
    static getSchema() {
        return yup.object().shape({
            id: yup.string().required(),
            name: yup.string().required(),
            features: yup.array(yup.string()),
            price: yup.number().positive().required(),
            options: yup.array(yup.object().shape({
                id: yup.string().required(),
                title: yup.string(),
                price: yup.number().positive().required()
            }))
        });
    };


    /**
     *
     * @param prop properties to populate the class from
     * @returns {Plan} a proper instantiated class
     */
    static from(prop) {
        return Object.assign(new Plan(), prop)
    }

    /**
     * Validates the object
     * @returns {*} Casted version of this object or throws Validation errors
     */
    validate() {
        return Plan.getSchema().validateSync(this);
    }

    /**
     *
     * @param obj Object to be validated against the class's schema
     * @returns {*} list of validation errors or a casted version of the obj
     */
    static validateObject(obj) {
        return Plan.getSchema().validateSync(obj);
    }
}

module.exports = Plan
