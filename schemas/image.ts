export default {
    name: 'images',
    title: 'Images',
    type: 'image',
    fields: [
        {
            name: "caption",
            title: "Caption",
            type: "string",
            options: {
                isHighlighted: true
            }
        },
    ],
    options: {
        hotspot: true,
    }
}