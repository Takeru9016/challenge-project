type Base = {
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string,
}

interface Vendor extends Base {
    name: string
    shopname: string
    id: number
    slug: Slug
    mainImage: Image
    description: Block[]
    measurement: string
    address: string
    ratings: string
    price: number
}