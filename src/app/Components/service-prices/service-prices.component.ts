import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-service-prices',
	templateUrl: './service-prices.component.html',
	styleUrls: ['./service-prices.component.scss']
})
export class ServicePricesComponent implements OnInit {

	list1: Object[] = [
		{ name: 'Chăm sóc da mặt cơ bản', price: '290.000', old_price: '0' }, 
		{ name: 'Chăm sóc da mặt chuyên sâu', price: '450.000', old_price: '12.20' }, 
		{ name: 'Chăm sóc da mặt đặc biệt', price: '705.000', old_price: '12.20' }, 
		{ name: 'Chăm sóc da mặt tổn thương nhẹ, mụn cám', price: '960.000', old_price: '12.20' }, 
		{ name: 'Nâng cơ tế bào gốc nuôi dưỡng sâu dưới ', price: '1.246.000', old_price: '12.20' }
	]

	list12: Object[] = [
		{ name: 'Điều trị giãn mao mạch hai bên mũi/thía dương/gò má/cằm', price: '1.790.000', old_price: '0' }, 
		{ name: 'Trẻ hoá vùng trán/hai rãnh mũi/khoé miệng/cằm', price: '2.125.000', old_price: '12.20' }, 
		{ name: 'Trẻ hoá vùng cổ', price: '3.800.000', old_price: '12.20' }, 
		{ name: 'Trẻ hoá toàn diện khuôn mặt', price: '4.470.000', old_price: '12.20' }, 
		{ name: 'Điều trị da không đều màu, dị ứng, da bị tổn thương', price: '5.475.000', old_price: '12.20' },
		{ name: 'Điều trị da bị nám, đốm nâu do sắc tố da biến màu', price: '6.145.000', old_price: '0' },
		{ name: 'Điều trị da mụn, nhiễm trùng da, mụn thâm, se khít lỗ chân lông', price: '6.480.000', old_price: '0' },
		{ name: 'Điều trị dạn nứt mông, đùi', price: '6.815.000', old_price: '0' },
		{ name: 'Điều trị da bụng rạn nứt, trẻ hoá vùng da bụng', price: '7.150.000', old_price: '0' },
		{ name: 'Điều trị thâm bẹn/nách/mông', price: '7.485.000', old_price: '0' },
		{ name: 'Làm hồng nhũ hoa/môi/mép', price: '7.820.000', old_price: '0' },
	]

	list2: Object[] = [
		{ name: 'Chăm sóc da lưng, mụn', price: '705.000', old_price: '0' }, 
		{ name: 'Tắm sạch cơ thể, modelage thư giãn', price: '750.000', old_price: '12.20' }, 
		{ name: 'Đánh tan mỡ bụng/đùi/tay chân', price: '850.000', old_price: '12.20' }, 
		{ name: 'Giảm béo công nghệ tần sóng siêu âm', price: '6.815.000', old_price: '12.20' }, 
		{ name: "Tạo dáng eo thon, bụng nhỏ (21')", price: '7.485.000', old_price: '12.20' },
		{ name: "Tạo dáng toàn thân tay, đùi, bụng (25')", price: '9.325.000', old_price: '12.20' }, 
	]

	list22: Object[] = [
		{ name: "Phi thuyền Elegance công nghệ cao trắng sáng toàn thân", price: '2.950.000', old_price: '12.20' },
		{ name: 'Phi thuyền Elegance ngâm bồn', price: '3.150.000', old_price: '12.20' },
		{ name: 'Phi thuyền Harmony Mediq', price: '6.522.000', old_price: '12.20' },
		{ name: 'VIP Combo toàn thể', price: '11.999.000', old_price: '12.20' },
		{ name: 'Trọn gói VIP Combo', price: '12.999.000', old_price: '12.20' },
	] 

	list31: Object[] = [
		{ name: 'Nhuộm mày', price: '450.000', old_price: '0' },
		{ name: 'Uốn cong mi', price: '650.000', old_price: '0' },
		{ name: 'Trang điểm ngày/đêm/dạ tiệc', price: '450.000/550.000/750.000', old_price: '0' },
		{ name: 'Nối mi thường/dày/sửa', price: '200.000/350.000/150.000', old_price: '0' },
		{ name: 'Trang điểm cô dâu', price: '3.499.000', old_price: '0' },
	]

	list32: Object[] = [
		{ name: 'Phun mày tán bột', price: '3.999.000', old_price: '0' },
		{ name: 'Phun môi Nano', price: '5.999.000', old_price: '0' },
		{ name: 'Xăm mí trên/dưới', price: '3.499.000', old_price: '0' },
		{ name: 'Phun mí mở tròng', price: '3.999.000', old_price: '0' }
	]

	list33: Object[] = [
		{ name: 'Mép/cằm/khuôn mặt', price: '3.999.000', old_price: '0' },
		{ name: 'Nách', price: '5.999.000', old_price: '0' },
		{ name: 'Lưng/Bụng/Ngực', price: '3.499.000', old_price: '0' },
		{ name: 'Cánh tay', price: '3.999.000', old_price: '0' },
		{ name: 'Chân', price: '3.999.000', old_price: '0' },
		{ name: 'Bikini/Ticket', price: '3.999.000', old_price: '0' }
	]

	list34: Object[] = [
		{ name: 'Mép/cằm', price: '2.215.000', old_price: '0' },
		{ name: 'Nách/Bẹn', price: '3.800.000', old_price: '0' },
		{ name: 'Lưng/Bụng/Ngực', price: '5.475.000', old_price: '0' },
		{ name: '1/2 Cánh tay', price: '3.800.000', old_price: '0' },
		{ name: 'Cánh tay', price: '7.150.000', old_price: '0' },
		{ name: '1/2 Chân', price: '4.470.000', old_price: '0' },
		{ name: 'Toàn Chân', price: '8.490.000', old_price: '0' },
		{ name: 'Bikini', price: '5.475.000', old_price: '0' },
		{ name: 'Ticket', price: '6.815.000', old_price: '0' }
	]

	constructor() { }

	ngOnInit() {
	}

}
