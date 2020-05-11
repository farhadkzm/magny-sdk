const yup = require('yup')
const Location = require('./Location')

/**
 * Represents a business in Magny
 * @class
 */
class Business {
    /**
     * Geo location of the business
     * @type {Location} */
    location;
    /**
     * Array of tags
     * @type {string[]} */
    tags;

    /** @type {string} */
    category;

    /** @type {string} */
    name;

    /** @type {string} */
    description;

    /**
     * UID of the user who owns this business
     * @type {string} */
    ownerId;

    /**
     * List of image URIs
     * @type {string[]} */
    images;

    /**
     * Image URI of the cover image
     * @type {string} */
    imageCover;

    /**
     * @type {string} */
    phone;

    /**
     * @type {string} */
    email;

    /**
     * @type {string} */
    web;

    /**
     * Working hours of the business. For more details look at schema.workingHours.
     * @type {Array} */
    workingHours;

    /**
     * Plan Id that the owner has purchased for this business
     * @type {string} */
    planId;

    /**
     * Schema to validate the object
     */
    static schema = yup.object().shape({
        location: yup.object().shape(Location.schema),
        tags: yup.array(yup.string()),
        category: yup.string().required(),
        name: yup.string().required(),
        description: yup.string(),
        ownerId: yup.string(),
        images: yup.array(yup.string()),
        imageCover: yup.string(),
        phone: yup.string(),
        email: yup.string().email(),
        web: yup.string().url(),
        workingHours: yup.array(yup.object().shape({
            day: yup.string().required(),
            start: yup.string().required(),
            end: yup.string().required(),
        })),
        planId: yup.string(),
    });

    /**
     *
     * @param prop properties to populate the class from
     * @returns {Business} a proper instantiated class
     */
    static from(prop) {
        return Object.assign(new Business(), prop)
    }

    /**
     * Validates the object
     * @returns {*} Casted version of this object or throws Validation errors
     */
    validate() {
        return Business.schema.validateSync(this);
    }

    /**
     *
     * @param obj Object to be validated against the class's schema
     * @returns {*} list of validation errors or a casted version of the obj
     */
    static validateObject(obj) {
        return Business.schema.validateSync(obj);
    }
}

module.exports = Business
