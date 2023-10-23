import { reactive } from 'vue';


export const store = reactive({
	featuredProduct: {
		name:'Shaving Butter',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempora minima animi eligendi delectus hic laboriosam consequatur nihil, magnam ea quisquam veritatis asperiores sit beatae voluptate, dolorum porro qui odio?',
		image: '/main-shop/shaving_butter.png'
	},
	services: [
		{
			name: 'Trim & Cut',
			desc: 'Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking',
			image:'/main-services/avadabarbers-trimcut-icon-before.png'
		},
		{
			name: 'Wash & Dry',
			desc: 'Take a seat in our leather chairs, lean back and let us lather you a fresh head in a luxurios fashion.',
			image:'/main-services/avadabarbers-washndry-icon.png'
		},
		{
			name: 'Beard Tidy',
			desc: 'Tame the tangles and untidy facial hairs like a gentleman with our Beard Tidy services from Avada Barbers.',
			image:'/main-services/avadabarbers-beardtrim-icon.png'
		},
	],
	team:[
		{
			name: 'John Doe',
			photo: 'avadabarbers-trimcut-gallery6.jpg',
			overview: '	Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, commodi laborum! Commodi ex ea nihil nulla inventore at dolorem dicta esse, laboriosam soluta, repellat, corrupti aspernatur nobis cupiditate excepturi nemo?'
		},
		{
			name: 'Pete Jones',
			photo: 'avadabarbers-trimcut-gallery7.jpg',
			overview: '	Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, commodi laborum! Commodi ex ea nihil nulla inventore at dolorem dicta esse, laboriosam soluta, repellat, corrupti aspernatur nobis cupiditate excepturi nemo?'
		},
		{
			name: 'Mark Wilson',
			photo: 'avadabarbers-trimcut-gallery3.jpg',
			overview: '	Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, commodi laborum! Commodi ex ea nihil nulla inventore at dolorem dicta esse, laboriosam soluta, repellat, corrupti aspernatur nobis cupiditate excepturi nemo?'
		},
	],
	shopItems: [
		{
			name: 'Brush',
			price: '15',
			image:'brush_dark-400x400.png'
		},
		{
			name: 'Scissors',
			price: '85',
			image:'scissors-400x400.png'
		},
		{
			name: 'Hot Oil',
			price: '15',
			image:'hot_oil_dark-400x400.png'
		},
		{
			name: 'Straight Razor',
			price: '30',
			image:'straight_razor_dark-400x400.png'
		},
		{
			name: 'Shaving Butter',
			price: '45',
			image:'shaving_butter-400x400.png'
		},
	],
	blogs: [
		{
			title: 'Avada Barbers Now Open',
			overview: "Some quick example text to build on the card title and make up the bulk of the card's content.",
			image: '/main-blog/avadabarbers-second-blog-320x202.jpg'
		},
		{
			title: 'Choosing The Right Barber',
			overview: "Some quick example text to build on the card title and make up the bulk of the card's content.",
			image: '/main-blog/avadabarbers-choosing-blog-320x202.jpg'
		},
		{
			title: 'Quick Service Guide',
			overview: "Some quick example text to build on the card title and make up the bulk of the card's content.",
			image: '/main-blog/avadabarbers-ourservice-blog-320x202.jpg'
		},
	]
})