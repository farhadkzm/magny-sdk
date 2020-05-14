import yup from 'yup'

/**
 * Represents a plan that users can purchase in Magny
 * @class
 */
class Plan {
    /**
     * Name of the plan to be shown to the user
     * @type {string} */
    name = undefined;
    /**
     * Id of the plan
     * @readonly
     * @type {string} */
    id = undefined;

    /**
     * Features of the plan
     * @type {string[]} */
    features = undefined;

    /** @type {number} */
    price = undefined;

    /**
     * Extra features that users can choose.
     * @type {Array} */
    options = undefined;

    /**
     * Schema to validate the object
     */
    static schema = yup.object().shape({
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
        return Plan.schema.validateSync(this);
    }

    /**
     *
     * @param obj Object to be validated against the class's schema
     * @returns {*} list of validation errors or a casted version of the obj
     */
    static validateObject(obj) {
        return Plan.schema.validateSync(obj);
    }
}

module.exports = Plan
