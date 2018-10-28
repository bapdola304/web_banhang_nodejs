function GioHang (oldCart){
	this.items = oldCart.items || {};
	// this.totalQty = oldCart.totalQty || 0;
	// this.totalPrice = oldCart.totalPrice || 0;

	this.add = function(id, item){
		var giohang = this.items[id];

		if(!giohang){
			giohang = this.items[id] = {item: item, soluong: 0, tongtien: 0, gia : 0}
		}
		giohang.soluong++;
		giohang.tongtien = giohang.soluong * giohang.item.gia;
		giohang.gia = giohang.item.gia;

		// this.totalQty+=1;
		// this.totalPrice +=giohang.tien;
	}
	this.getcart = function(){
		var arr = [];
		for(var id in this.items){
			arr.push(this.items[id]);
		}
		return arr;
	}
	this.delCart = function(id){
		delete this.items[id];

	}
	this.updateCart = function(id, sl){
		this.items[id].soluong =parseInt(sl);
		this.items[id].tongtien = this.items[id].item.gia * this.items[id].soluong;
	}
}
	module.exports = GioHang;