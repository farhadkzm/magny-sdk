const Location = require('./Location')

test('Location lng validation', () => {

    try {
        Location.from({lng: -600, lat: 30, address: 'something more than 10 characters'})
            .validate()

    } catch (e) {
        expect(e.message).toBe('lng must be greater than or equal to -180')
        return
    }
    throw new Error('Expected to file')
});

test('Location lon validation', () => {

    try {
        Location.from({lng: -60, lat: 91, address: 'something more than 10 characters'})
            .validate()

    } catch (e) {
        expect(e.message).toBe('lat must be less than or equal to 90')
        return
    }
    throw new Error('Expected to file')
});
