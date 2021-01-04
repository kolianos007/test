$(function() {

	const getInfo = async () => {
		await axios.get('https://ipapi.co/json/').then((response) => {
			let data = response.data
			document.querySelector('input[name="country"]').value = data.country_name
			document.querySelector('input[name="phone"]').value = data.country_calling_code
		}).catch((error) => {
			console.log(error)
		})
	}

	getInfo()

	jQuery.validator.addMethod("phoneUS", function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.match(/([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/);
    }, "Please specify a valid phone number");

	$('.form').validate({
		rules: {
			name:{
				required: true
			},
			country:{
				required: true
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				phoneUS: true
			},
		},
		messages: {
			name:{
				required: 'Введите Ваше имя'
			},
			country:{
				required: 'Введите Вашу страну'
			},
			email: {
				required: 'Введите Ваш email',
				email: 'Введите корректный email'
			},
			phone: {
				required: 'Введите Ваш телефон',
				number: 'Введите корректный телефон'
			},
			check: {
				required: 'Подтвердите свое согласие'
			}
		}
	})


	const slide = ` 
		<div class="slide slide_2">
			<div class="block-first slide_w">
				<div class="block-first_title">
					Get Access To Tradenet Plus for Free
				</div>
				<div class="line">
					<div class="line_left">
						<div class="line_title">
							Trading Platform
						</div>
						<div class="line-wrap-btn">
							<a href="javascript:void(0);" class="btn btn_orange line_button">
								Download for <img src="img/wind.png" alt="windows">
							</a>
							<a href="javascript:void(0);" class="btn btn_orange line_button">
								Download for <img src="img/ios.png" alt="ios">
							</a>
						</div>
					</div>
					<div class="line_right">
						<div class="line_title">
							Trading Room
						</div>
						<a href="javascript:void(0);" class="btn btn_orange line_button">
							Access Webinate
						</a>
					</div>
				</div>
			</div>
			<div class="block-second slide_w">
				<div class="block-second_title">
					Let’s start our journey with Tradenet 
				</div>
				<div class="block-second_answ">
					How do ordinary people become day traders?
				</div>
				<a href="javascript:void(0);" class="btn btn_opacity btn_start">Take the quiz</a>
			</div>
		</div>
	`

	const slideLast = ` 
		<div class="slide slide_last">
			<div class="slide_w slide_quiz slide-end">
				<div class="slide_last-title">That's it!</div>
				<div class="slide_last-descr">
					These are the solutions that we would like to 
					suggest to you according to your answers
				</div>
				<div class="banners">
					<div class="banner">
						<img src="img/banner1.jpg" alt="banner">
						<div class="banner_text">
							<div class="banner_title">Free Course</div>
							<div class="banner_descr">Take our free course 
								and start your day trading journey today!</div>
						</div>
					</div>
					<div class="banner">
						<img src="img/banner2.jpg" alt="banner">
						<div class="banner_text">
							<div class="banner_title">Trading
								challenge</div>
							<div class="banner_descr">Take the 5-day challenge
								and win amazing prizes</div>
							<div class="banner_img">
								<img src="img/banner2.png" >
							</div>
						</div>
					</div>
					<div class="banner">
						<img src="img/banner3.jpg" alt="banner">
						<div class="banner_text">
							<div class="banner_title">Tradenet 
								Stock Talks </div>
							<div class="banner_descr">Join our Facebook community of successful traders and learn from the best</div>
							<div class="banner_img">
								<img src="img/banner3.png" >
							</div>
						</div>
							<div class="banner_ico">
								<img src="img/fb.svg" >
							</div>
					</div>
				</div>
			</div>
		</div>
	`

	const quizArr = [
		{
			id: 1,
			question: 'For how long have you been trading?',
			timeline: ` 
				<div class="active">1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
			`,
			answers: [
				{
					img: 
						`<svg class="inline-svg-icon i11">
							<use xlink:href="img/sprite.svg#i11"></use>
						</svg>`,
					text: '0 years'
				},
				{
					img: 
						`<svg class="inline-svg-icon i12">
							<use xlink:href="img/sprite.svg#i12"></use>
						</svg>`,
					text: '12 months or less'
				},
				{
					img: 
						`<svg class="inline-svg-icon i13">
							<use xlink:href="img/sprite.svg#i13"></use>
						</svg>`,
					text: '1-3 years'
				},
				{
					img: 
						`<svg class="inline-svg-icon i14">
							<use xlink:href="img/sprite.svg#i14"></use>
						</svg>`,
					text: 'Over 3 years'
				},
			]
		},
		{
			id: 2,
			question: 'What are you looking to achieve in trading?',
			timeline: ` 
				<div class="active">1</div>
				<div class="active">2</div>
				<div>3</div>
				<div>4</div>
			`,
			answers: [
				{
					img: 
						`<svg class="inline-svg-icon i21">
							<use xlink:href="img/sprite.svg#i21"></use>
						</svg>`,
					text: 'Self-fulfillment and challenge – a hobby'
				},
				{
					img: 
						`<svg class="inline-svg-icon i22">
							<use xlink:href="img/sprite.svg#i22"></use>
						</svg>`,
					text: 'Knowledge in economics, business, and trading'
				},
				{
					img: 
						`<svg class="inline-svg-icon i23">
							<use xlink:href="img/sprite.svg#i23"></use>
						</svg>`,
					text: 'Secondary income'
				},
				{
					img: 
						`<svg class="inline-svg-icon i24">
							<use xlink:href="img/sprite.svg#i24"></use>
						</svg>`,
					text: 'Primary income'
				},
			]
		},
		{
			id: 3,
			question: 'How much free time do you have per day?',
			timeline: ` 
				<div class="active">1</div>
				<div class="active">2</div>
				<div class="active">3</div>
				<div>4</div>
			`,
			answers: [
				{
					img: 
						`<svg class="inline-svg-icon i31">
							<use xlink:href="img/sprite.svg#i31"></use>
						</svg>`,
					text: 'None'
				},
				{
					img: 
						`<svg class="inline-svg-icon i32">
							<use xlink:href="img/sprite.svg#i32"></use>
						</svg>`,
					text: 'An hour'
				},
				{
					img: 
						`<svg class="inline-svg-icon i33">
							<use xlink:href="img/sprite.svg#i33"></use>
						</svg>`,
					text: '2-3 hours'
				},
				{
					img: 
						`<svg class="inline-svg-icon i34">
							<use xlink:href="img/sprite.svg#i34"></use>
						</svg>`,
					text: 'Full time'
				},
			]
		},
		{
			id: 3,
			question: 'How much capital should you invest to be successful?',
			timeline: ` 
				<div class="active">1</div>
				<div class="active">2</div>
				<div class="active">3</div>
				<div class="active">4</div>
			`,
			answers: [
				{
					img: 
						`<svg class="inline-svg-icon i41">
							<use xlink:href="img/sprite.svg#i41"></use>
						</svg>`,
					text: '$0'
				},
				{
					img: 
						`<svg class="inline-svg-icon i42">
							<use xlink:href="img/sprite.svg#i42"></use>
						</svg>`,
					text: '$500 - $2,000'
				},
				{
					img: 
						`<svg class="inline-svg-icon i43">
							<use xlink:href="img/sprite.svg#i43"></use>
						</svg>`,
					text: '$2,000-$10,000'
				},
				{
					img: 
						`<svg class="inline-svg-icon i44">
							<use xlink:href="img/sprite.svg#i44"></use>
						</svg>`,
					text: '$10,000 and up'
				},
			]
		},
	]

	let counter = 0


	function postSlide(counter) {  
		return ` 
			<div class="slide slide_3">
				<div class="slide_quiz slide_w">
					<div class="question_number">
						Question <span class="one">${counter + 1} </span> of <span class="all">4</span>
					</div>
					<div class="answer-wrap">
						<div class="question">${quizArr[counter].question}</div>
						<div class="answers_block">
							<div class="timeline">
								${quizArr[counter].timeline}
							</div>
							<div class="answers">
								<div class="answer">
									<div class="svg-wrap">
										${quizArr[counter].answers[0].img}
									</div>
									<span>${quizArr[counter].answers[0].text}</span>
								</div>
								<div class="answer">
									<div class="svg-wrap">
										${quizArr[counter].answers[1].img}
									</div>
									<span>${quizArr[counter].answers[1].text}</span>
								</div>
								<div class="answer">
									<div class="svg-wrap">
										${quizArr[counter].answers[2].img}
									</div>
									<span>${quizArr[counter].answers[2].text}</span>
								</div>
								<div class="answer">
									<div class="svg-wrap">
										${quizArr[counter].answers[3].img}
									</div>
									<span>${quizArr[counter].answers[3].text}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`
	}
	

	let data= {
		name: '',
		country: '',
		email: '',
		phone: '',
		answer: []
	}
	let startQuiz = false


	$('.quiz .btn_form').on('click', function(e){
		e.preventDefault()
		if($('.form').valid()) {
			data.name = $('input[name="name"]').val()
			data.email = $('input[name="email"]').val()
			data.phone = $('input[name="phone"]').val()
			data.country = $('input[name="country"]').val()
			$('.quiz').html(slide)
		}
	})

	$('.quiz').on('click', '.btn_start', function(e){
		e.preventDefault()
		$('.quiz').html(postSlide(counter))
		startQuiz = true
	})

	function postData(){
		axios.post('https://test/', data).then(res => console.log(res)).catch(e => console.log('Смотрите отправленные данные в Network, так как тестовый сервер придуманный'))
	}


	$('.quiz').on('click', '.answer', function(e){
		let target = event.target.closest('.answer').querySelector('span')
		if(counter < quizArr.length - 1) {
			e.preventDefault()
			data.answer[counter] = `Питання - ${counter + 1}: ${target.textContent}`
			++counter
			$('.quiz').html(postSlide(counter))
			if(counter === 1) {
				postData()
			}
		} else {
			data.answer[counter] = `Питання - ${counter + 1}: ${target.textContent}`
			postData()
			$('.quiz').html(slideLast)
		}
	})


});
