import mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  img: String,
  description: String,
  brand: String,
  price: String,
  color: String,
  created: {
    type: Date,
    default: Date.now(),
  },
});



// export enum Product_Service {
//   NOW = 'Giao siêu tốc 2h',
//   ASTRA = 'Thưởng thêm Astra',
//   FREESHIP = 'Không giới hạn',
// }

// export enum Product_Rate {
//   FROM_5_START = 'Từ 5 sao',
//   FROM_4_START = 'Từ 4 sao',
//   FROM_3_START = 'Từ 3 sao',
// }

// export enum Product_Price {
//   UNDER_100K = 'Dưới 100.000',
//   FROM_100K_TO_200k = '100.000 -> 200.000',
//   FROM_200K_TO_500k = '200.000 -> 500.000',
//   UPPER_500K = 'Trên 500.000',
// }

export enum Product_Brand {
  GSOCK = 'G-SOCK',
  APPLEWATCH = 'APPLEWATCH',
  TISSOT = 'TISSOT',
  CITIZEN = 'CITIZEN',
  ORIENT = 'ORIENT',
  CASIO = 'CASIO',
  SEIKO = 'SEIKO',
}

// export enum Product_Material {
//   COTTON = 'Cotton',
//   POLYESTER = 'Polyester',
//   SPANDEX = 'Spandex',
//   BAMBBO = 'Bamboo',
//   SILK = 'Lụa',
//   MODEL = 'Model',
//   FELT = 'Nỉ',
//   JEANS = 'Jeans',
//   VISCOSE = 'Viscose',
//   WOOL = 'Len',
//   JACQUARD = 'Jacquard',
//   KAKI = 'Kaki',
// }

// export enum Product_Form {
//   REGULAR_FIT = 'Regular fit',
//   SLIM_FIT = 'Slim fit',
//   OVER_SIZE = 'Ngoại cỡ',
// }

// export enum color {
//   BLACK = 'Đen',
//   WHITE = 'Trắng',
//   BLUE = 'Xanh Dương',
//   GREEN = 'Xanh lá',
//   GREY = 'Xám',
//   RED = 'Đỏ',
//   YELLOW = 'Vàng',
//   BROWN = 'Nâu',
//   CREAM = 'Kem',
//   ORANGE = 'Cam',
//   PINK = 'Hồng',
//   PURPLE = 'Tím',
// }

// export enum Product_Size {
//   XS = 'XS',
//   S = 'S',
//   M = 'M',
//   L = 'L',
//   XL = 'XL',
//   XXL = 'XXL',
//   FREESIZE = 'FREESIZE',
// }

// export enum Product_Shipping {
//   INTERNAL = 'Hàng nội địa',
//   EXTERNAL = 'Hàng quốc tế',
// }
