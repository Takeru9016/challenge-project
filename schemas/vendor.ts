export default {
    name: 'vendor',
    title: 'Vendor',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Your Name',
            type: 'string'
        },
        {
            name: 'shopname',
            title: 'Shop Name',
            type: 'string'
        },
        {
            name: "id",
            title: "ID",
            type: "number",
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'shopname',
                maxLength: 100,
            }
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'measurement',
            title: 'Measurement',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
            rows: 10
        },
        {
            name: 'ratings',
            title: 'Ratings',
            type: 'string',
            options: {
                list: [
                    { title: '⭐⭐⭐⭐⭐', value: '5⭐' },
                    { title: '⭐⭐⭐⭐', value: '4⭐' },
                    { title: '⭐⭐⭐', value: '3⭐' },
                    { title: '⭐⭐', value: '2⭐' },
                    { title: '⭐', value: '1⭐' },
                ],
                layout: 'radio'
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
    ]
}