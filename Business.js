import yup from 'yup'
import Location from './Location'

/**
 * Represents a business in Magny
 * @class
 */
class Business {
    /**
     * Geo location of the business
     * @type {Location} */
    location = undefined;
    /**
     * Array of tags
     * @type {string[]} */
    tags = undefined;

    /** @type {string} */
    category = undefined;

    /** @type {string} */
    name = undefined;

    /** @type {string} */
    description = undefined;

    /**
     * UID of the user who owns this business
     * @type {string} */
    ownerId = undefined;

    /**
     * UID of the user who has created this business
     * @type {string} */
    creatorId = undefined;

    /**
     * List of image URIs
     * @type {string[]} */
    images = undefined;

    /**
     * List of image URIs
     * @type {string[]} */
    priceList = undefined;

    /**
     * List of image URIs
     * @type {string[]} */
    followers = undefined;

    /**
     * List of image URIs
     * @type {string[]} */
    thanks = undefined;

    /**
     * List of image URIs
     * @type {string[]} */
    likes = undefined;

    /**
     * Image URI of the cover image
     * @type {string} */
    imageCover = undefined;

    /**
     * @type {string} */
    phone = undefined;

    /**
     * @type {string} */
    email = undefined;

    /**
     * @type {string} */
    web = undefined;

    /**
     * Working hours of the business. For more details look at schema.workingHours.
     * @type {Array} */
    workingHours = undefined;

    /**
     * Plan Id that the owner has purchased for this business
     * @type {string} */
    planId = undefined;

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

export default Business;
