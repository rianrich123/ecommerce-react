const products = [
  {
    id: 1,
    name: "Gaming Headset",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/93339674/vector/online-gaming-headset.jpg?s=612x612&w=0&k=20&c=Hg65VjUisQyMr5S7JPaCmD4JwKliq2_vxKAhbucejJI=",
    imageAlt: "preview of the gaming headset.",
    price: "$35",
    color: "Black and White",
  },
  {
    id: 2,
    name: "Gaming Headset",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/93339674/vector/online-gaming-headset.jpg?s=612x612&w=0&k=20&c=Hg65VjUisQyMr5S7JPaCmD4JwKliq2_vxKAhbucejJI=",
    imageAlt: "preview of the gaming headset.",
    price: "$35",
    color: "Black and White",
  },
  {
    id: 3,
    name: "Gaming Headset",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/93339674/vector/online-gaming-headset.jpg?s=612x612&w=0&k=20&c=Hg65VjUisQyMr5S7JPaCmD4JwKliq2_vxKAhbucejJI=",
    imageAlt: "preview of the gaming headset.",
    price: "$35",
    color: "Black and White",
  },
  {
    id: 4,
    name: "Gaming Headset",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/93339674/vector/online-gaming-headset.jpg?s=612x612&w=0&k=20&c=Hg65VjUisQyMr5S7JPaCmD4JwKliq2_vxKAhbucejJI=",
    imageAlt: "preview of the gaming headset.",
    price: "$35",
    color: "Black and White",
  },
  {
    id: 5,
    name: "Gaming Headset",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/93339674/vector/online-gaming-headset.jpg?s=612x612&w=0&k=20&c=Hg65VjUisQyMr5S7JPaCmD4JwKliq2_vxKAhbucejJI=",
    imageAlt: "preview of the gaming headset.",
    price: "$35",
    color: "Black and White",
  },
  {
    id: 6,
    name: "Gaming Headset",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/93339674/vector/online-gaming-headset.jpg?s=612x612&w=0&k=20&c=Hg65VjUisQyMr5S7JPaCmD4JwKliq2_vxKAhbucejJI=",
    imageAlt: "preview of the gaming headset.",
    price: "$35",
    color: "Black and White",
  },
  {
    id: 7,
    name: "Gaming Headset",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/93339674/vector/online-gaming-headset.jpg?s=612x612&w=0&k=20&c=Hg65VjUisQyMr5S7JPaCmD4JwKliq2_vxKAhbucejJI=",
    imageAlt: "preview of the gaming headset.",
    price: "$35",
    color: "Black and White",
  },
  {
    id: 8,
    name: "Gaming Headset",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/93339674/vector/online-gaming-headset.jpg?s=612x612&w=0&k=20&c=Hg65VjUisQyMr5S7JPaCmD4JwKliq2_vxKAhbucejJI=",
    imageAlt: "preview of the gaming headset.",
    price: "$35",
    color: "Black and White",
  },
];

export const Product = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Check out our catalouge
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative border-2 hover:border-blue-800 p-2">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="flex gap-1 flex-col">
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
