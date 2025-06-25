document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "SHORTS DENIM BLACK ", desc: "Tampil edgy dan stylish dengan Shorts Denim Black.Celana pendek ini hadir dalam warna hitam dengan efek washed dan detail grafis timbul bertuliskan Saint World di bagian depan. Dilengkapi aksen rantai logam yang menambah kesan streetwear modern. Terbuat dari bahan denim berkualitas tinggi yang nyaman dan tahan lama, cocok untuk tampilan kasual maupun statement look", img: "1.png", price: 250000 },
      { id: 2, name: "HOODIE BROWN SAINT FADED", desc: "Hoodie Faded membawa nuansa vintage dan grunge dalam satu balutan. Didesain dengan efek faded cokelat kehitaman yang unik, hoodie ini menampilkan grafis tulisan Saint dalam huruf Arab dan kutipan “Where Legends Are Born” di bagian depan. Potongan oversize dengan kantong kangaroo menambah kenyamanan sekaligus gaya. Cocok untuk Anda yang ingin tampil beda dan penuh karakter.", img: "2.png", price: 275000 },
      { id: 3, name: "DOUBLE SHIRT LITTLE ANGEL", desc: "Gabungan gaya retro dan streetwear, Double Shirt dari Palace Studios menampilkan desain dua lapis: kaos putih dengan print malaikat vintage dan lengan panjang hitam bergaris yang memberikan efek layer tanpa ribet. Tulisan Palace Studios dan Palace Around the World menambah sentuhan artistik. Sempurna untuk Anda yang menyukai fashion eksperimental dan unik.", img: "3.jpg", price: 299000 },
      { id: 4, name: "BLACK SHIRT PRINCE SAINT", desc: "Kaos hitam klasik ini menampilkan desain grafis yang mencolok dengan tulisan Prince Saint di bagian atas dan ilustrasi figur yang mengenakan mahkota duri, memberikan kesan misterius dan penuh gaya. Terbuat dari bahan yang nyaman, kaos ini cocok untuk tampilan kasual sehari-hari atau untuk mengekspresikan gaya yang berani dan edgy. Ideal dipadukan dengan jeans atau celana cargo.", img: "4.png", price: 199000 },
      { id: 5, name: "GREEN HOODIE ZIPPER SOCIETY", desc: "Hoodie berwarna hijau pudar dengan model oversized ini menawarkan kenyamanan maksimal dan gaya streetwear yang trendi. Dilengkapi dengan resleting penuh di bagian depan, hoodie ini memiliki tulisan Sinner Society dan SINNER STUDIO BASED IN ATLANTA GA di dada, serta detail grafis kelinci di bagian kantong. Efek pudar pada kain memberikan sentuhan vintage yang unik, sementara pinggiran bawah dan manset yang robek menambah kesan distresse yang edgy. Cocok untuk tampilan santai dan stylish.", img: "5.png", price: 599000 },
      { id: 6, name: "RED HOODIE ZIPPER SINNER ", desc: "Tampil berani dengan hoodie merah tua oversized ini. Desainnya mencakup lambang S yang artistik di satu sisi dada dan tulisan Sinner Society di sisi lainnya, memberikan kesan eksklusif dan stylish. Hoodie ini juga memiliki dua garis putih di sepanjang lengan, menambahkan sentuhan sporty. Dilengkapi dengan resleting penuh di bagian depan dan detail robek pada bagian kantong serta ujung hoodie, menambah kesan distressed yang populer. Sempurna untuk gaya kasual yang menonjol.", img: "6.png", price: 499000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek barang yang sama di cart

      const cartItem = this.items.find((item) => item.id === newItem.id);

      // belum ada
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // barang ada, cek barang beda atau sama di cart
        this.items = this.items.map((item) => {
          // barang beda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang ada, tambah quantity+subtotal
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // ambil item remove=id
      const cartItem = this.items.find((item) => item.id === id);

      // lebih dari 1
      if (cartItem.quantity > 1) {
        // telusuri
        this.item = this.items.map((item) => {
          // bukan barang yg di klik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika  barang sisa1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// konver rupi(ah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
