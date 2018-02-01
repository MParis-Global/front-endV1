import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-service-prices',
	templateUrl: './service-prices.component.html',
	styleUrls: ['./service-prices.component.scss']
})
export class ServicePricesComponent implements OnInit {

	list1: Object[] = [
		{ name: 'Chăm sóc da mặt cơ bản', price: '299.000', old_price: '-20%' }, 
		{ name: 'Chăm sóc da mặt chuyên sâu', price: '449.000', old_price: '-20%' }, 
		{ name: 'Chăm sóc da mặt đặc biệt', price: '699.000', old_price: '-20%' }, 
		{ name: 'Chăm sóc da mặt tổn thương nhẹ, mụn cám', price: '959.000', old_price: '-25%' }, 
		{ name: 'Nâng cơ tế bào gốc nuôi dưỡng sâu dưới ', price: '1.249.000', old_price: '-25%' }
	]

	list12: Object[] = [
		{ name: 'Điều trị giãn mao mạch hai bên mũi/thía dương/gò má/cằm', price: '1.799.000', old_price: '-25%' }, 
		{ name: 'Trẻ hoá vùng trán/hai rãnh mũi/khoé miệng/cằm', price: '1.999.000', old_price: '-25%' }, 
		{ name: 'Trẻ hoá vùng cổ', price: '3.799.000', old_price: '-30%' }, 
		{ name: 'Trẻ hoá toàn diện khuôn mặt', price: '4.499.000', old_price: '-30%' }, 
		{ name: 'Điều trị da không đều màu, dị ứng, da bị tổn thương', price: '5.499.000', old_price: '-30%' },
		{ name: 'Điều trị da bị nám, đốm nâu do sắc tố da biến màu', price: '5.999.000', old_price: '-35%' },
		{ name: 'Điều trị da mụn, nhiễm trùng da, mụn thâm, se khít lỗ chân lông', price: '6.499.000', old_price: '-35%' },
		{ name: 'Điều trị dạn nứt mông, đùi', price: '6.799.000', old_price: '-35%' },
		{ name: 'Điều trị da bụng rạn nứt, trẻ hoá vùng da bụng', price: '7.099.000', old_price: '-35%' },
		{ name: 'Điều trị thâm bẹn/nách/mông', price: '7.499.000', old_price: '-35%' },
		{ name: 'Làm hồng nhũ hoa/môi/mép', price: '7.999.000', old_price: '-40%' },
	]

	list2: Object[] = [
		{ name: 'Chăm sóc da lưng, mụn', price: '699.000', old_price: '-20%' }, 
		{ name: 'Tắm sạch cơ thể, modelage thư giãn', price: '749.000', old_price: '-20%' }, 
		{ name: 'Đánh tan mỡ bụng/đùi/tay chân', price: '849.000', old_price: '-25%' }, 
		{ name: 'Giảm béo công nghệ tần sóng siêu âm', price: '6.999.000', old_price: '-35%' }, 
		{ name: "Tạo dáng eo thon, bụng nhỏ (21')", price: '7.499.000', old_price: '-35%' },
		{ name: "Tạo dáng toàn thân tay, đùi, bụng (25')", price: '9.299.000', old_price: '-45%' }, 
	]

	list22: Object[] = [
		{ name: "Phi thuyền Elegance công nghệ cao trắng sáng toàn thân", price: '2.999.000', old_price: '-30%' },
		{ name: 'Phi thuyền Elegance ngâm bồn', price: '2.999.000', old_price: '-30%' },
		{ name: 'Phi thuyền Harmony Mediq', price: '6.499.000', old_price: '-35%' },
		{ name: 'VIP Combo toàn thể', price: '11.999.000', old_price: '-45%' },
		{ name: 'Trọn gói VIP Combo', price: '12.999.000', old_price: '-50%' },
	] 

	list31: Object[] = [
		{ name: 'Nhuộm mày', price: '449.000', old_price: '-20%' },
		{ name: 'Uốn cong mi', price: '649.000', old_price: '-20%' },
		{ name: 'Trang điểm ngày/đêm/dạ tiệc', price: '450.000', old_price: '-10%' },
		{ name: 'Trang điểm đêm', price: '550.000', old_price: '-10%' },
		{ name: 'Trang điểm dạ tiệc', price: '750.000', old_price: '-10%' },
		{ name: 'Nối mi thường', price: '200.000', old_price: '-5%' },
		{ name: 'Nối mi dày', price: '350.000', old_price: '-5%' },
		{ name: 'Sửa nối mi', price: '150.000', old_price: '-5%' },
		{ name: 'Trang điểm cô dâu', price: '3.499.000', old_price: '-20%' },
	]

	list32: Object[] = [
		{ name: 'Phun mày tán bột', price: '3.999.000', old_price: '-25%' },
		{ name: 'Phun môi Nano', price: '5.999.000', old_price: '-30%' },
		{ name: 'Xăm mí trên/dưới', price: '3.499.000', old_price: '-25%' },
		{ name: 'Phun mí mở tròng', price: '3.999.000', old_price: '-25%' }
	]

	list33: Object[] = [
		{ name: 'Mép', price: '99.000', old_price: '-5%' },
		{ name: 'Cằm', price: '169.000', old_price: '-5%' },
		{ name: 'Khuôn mặt', price: '249.000', old_price: '-5%' },
		{ name: 'Nách', price: '199.000', old_price: '-5%' },
		{ name: 'Lưng/Bụng/Ngực', price: '299.000', old_price: '-5%' },
		{ name: 'Cánh tay', price: '249.000', old_price: '-5%' },
		{ name: 'Chân', price: '399.000', old_price: '-5%' },
		{ name: 'Bikini/Ticket', price: '599.000', old_price: '-5%' }
	]

	list34: Object[] = [
		{ name: 'Mép/cằm', price: '2.199.000', old_price: '-25%' },
		{ name: 'Nách/Bẹn', price: '3.799.000', old_price: '-30%' },
		{ name: 'Lưng/Bụng/Ngực', price: '5.499.000', old_price: '-30%' },
		{ name: '1/2 Cánh tay', price: '3.799.000', old_price: '-30%' },
		{ name: 'Cánh tay', price: '6.999.000', old_price: '-35%' },
		{ name: '1/2 Chân', price: '4.499.000', old_price: '-30%' },
		{ name: 'Toàn Chân', price: '8.499.000', old_price: '-40%' },
		{ name: 'Bikini', price: '5.499.000', old_price: '-30%' },
		{ name: 'Ticket', price: '6.799.000', old_price: '-35%' }
	]

	constructor() { }

	ngOnInit() {
	}

}
