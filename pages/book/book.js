$("#form").submit(function (event) {
	event.preventDefault();

	const body = {};

	input_serialized = $(this).serializeArray();

	input_serialized.forEach((field) => {
		body[field.name] = field.value;
	});

	body.needRoom = body.needRoom === "on";

	body.needVat = body.needVat === "on";

	body.needSauna = body.needSauna === "on";

	//  &&
	// 		(body.needRoom || body.needVat || body.needSauna)
	if (body.name && body.phone && body.date && body.time) {
		$.ajax({
			type: "POST",
			url: "/apicreate",
			data: body,
			success: () => {
				Swal.fire({
					icon: "success",
					title: "Ми зв'яжемося з вами найближчим часом",
					showConfirmButton: false,
					timer: 1500,
				});
			},
			dataType: "json",
		});
	} else {
		Swal.fire({
			icon: "error",
			title: "Будь ласка, заповніть усі поля форми",
			timer: 1500,
		});
	}
});
