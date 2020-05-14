import yup from 'yup'

/**
 * Represents a geo location
 * @class
 */
class Location {

    /**
     * Schema to validate the object
     */
    static getSchema() {
        return yup.object().shape({
            address: yup.string().min(10).required(),
            lng: yup.number().min(-180).max(180).required(),
            lat: yup.number().min(-90).max(90).required(),
        });
    };

    /**
     *
     * @param prop properties to populate the class from
     * @returns {Location} a proper instantiated class
     */
    static from(prop) {
        return Object.assign(new Location(), prop)
    }

    /**
     * Validates the object
     * @returns {*} Casted version of this object or throws Validation errors
     */
    validate() {
        return Location.getSchema().validateSync(this);
    }

    /**
     *
     * @param obj Object to be validated against the class's schema
     * @returns {*} list of validation errors or a casted version of the obj
     */
    static validateObject(obj) {
        return Location.getSchema().validateSync(obj);
    }

}

export default Location