const Location = require('./Location')

test('Location can be created from an object', () => {

    try {
        Location.from({lng: -600, lat: 30, address: 'something more than 10 characters'})
            .validate()

    } catch (e) {
        expect(e.message).toBe('lng must be greater than or equal to -180')
        return
    }
    throw new Error('Expected to file')
});
