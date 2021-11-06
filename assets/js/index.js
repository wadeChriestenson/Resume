Vue.component('info', {
    // props: ['info'],
    data() {
        return{
            firstName: 'Wade',
            lastName: 'Chriestenson',
            street1: ' 2210 Marine Dr NW',
            street2: 'Apt 348,',
            city: 'Salem',
            state: 'Oregon',
            zip: 97304,
            phoneNumber: '(620) 869-5907',
            email: 'wade@wadeprojects.io',
            githubImage: './assets/img/github.png',
            linkedinImage: './assets/img/linkedin.png',
            emailImage: './assets/img/email.png'
        }
    },

    template:`
    <div class='info'>
    <h1>{{ firstName + ' ' + lastName }}</h1>
    <p>{{' ' + street1 + ' ' + street2 + ' ' + city + ' ' + state + ' ' + zip }}</p>
    <p>{{ 'Phone:' + ' ' + phoneNumber }}</p>
<!--    <p class="emailT">{{ 'Email: '}}<a class="emailA" href="mailto:{{ email }}">{{ email }}</p>-->
    <div class="image">
    <a href="mailto:{{ email }}"><img v-bind:src="image1"></a>
    <a href="https://github.com/wadeChriestenson" target="_blank"><img v-bind:src="image2"></a>
    <a href="https://www.linkedin.com/in/wadechriestenson/" target="_blank"><img v-bind:src="image3"></a>
    </div>
    </div>
    `,
    computed:{
        image1(){
          return this.emailImage
        },
        image2(){
            return this.githubImage
        },
        image3() {
            return this.linkedinImage
        }
    }
})

Vue.component('about-me', {
    data() {
        return {
            aboutMe: 'A loving husband and a proud father, transitioning into the tech sector. ' +
                'I`am currently pursuing a Bachelors Degree in Web Design from Southern New Hampshire University. ' +
                'Self taught developer since Covid 19. Aligned with being an aspiring UI/UX developer focused on data visualization. ' +
                'Dedicated to bettering the future of front-end User Experience.',
            skills: ['HTML', 'CSS', 'Javascript', 'VUE.JS', 'Python', 'Plotly', 'Google Charts', 'Mapbox']

        }
    },
    template:`
    <div class='about-me'>{{ aboutMe }}</div>
    `,
})
Vue.component('skills', {
    data() {
        return {
            skills: ['HTML', 'CSS', 'Javascript', 'VUE.JS', 'Python', 'Plotly', 'Google Charts', 'Mapbox']
        }
    },
    template:`
    <div class='skills'>
    <h3>Proficiencies</h3>
    <ul v-for="skill in skills">
    <li>{{ skill }}</li>
    </ul>
    </div>
    `,
})
Vue.component('work', {
        props: {
      jobs: {
          type: Array,
          required: true
      }
    },
    data() {
        return {
            work1: [
                 '- Dec 2020 to Present',
                'Create or update standard work for assembly department using the corporate ERP. ',
                'Setup machine per MESI documents(sonic welders, CNC, drill presses, heat stakers, etc..)',
                'Problem Solve and Trouble shot defects caused by operators or machinery in assembly.',
                'Practice and implement lean throughout the assembly department(5s, one piece flow, standard work.)'
            ],
            work2:[
                ' - Sep 2020 to Dec 2020',
                'Brake Press Operator- Run and maintain presses. ',
                'Form parts to prints and assure all parts meet quality standard. ',
                'Plasma Table- Cut flat metal parts to desired measurements. ',
                'Hoist and store metal to location. ',
                'Sheer Operator- cut and square flat parts to desired prints and organize parts per value stream.'
            ],
            work3: [
                '- Aug 2018 to July 2020',
                'Blend Specialist- Blend titanium parts to specified work instruction.',
                'Pneumatic hand tools- Work and understand all basic pneumatic forms of Dremel’s,'+
                'ninety-degree grinders, orbital sanders, and three-inch grinders.',
                'Quality- Read and follow quality roadmaps per part, first pass yields all time.',
                'Maintained- Clean, stock, sweep and follow daily, weekly, and monthly cleaning charts.'
            ],
            work4:[
                 '- May 2013 to July 2018',
                'Fabrication experience- Roller, Folding Table, Trump Laser, ATC Amada Brake Press, and Amada Brake Press. Creation of Standards, Safety, and Preventive Maintenance in all of Fabrication per value stream.',
                'Weld Experience- Tack Jig Welder, Robot Welder, and grinder. Checking quality of welds to prints. Creation of standards, safety, and preventive maintenance in weld cells per value stream.',
                'Assembly- Follow prints to build specific units. Read and follow standards. Adhere to all safety rules and regulations.',
                'Lead- Delegating task to floor employees. Communication with all departments to create units per schedule. Safety and Quality Audits in cells per value stream.',
                'Supervisor- Delegate all tasks for shift to floor leads. Create and implement leader standard work. Create cross training systems to help reduce quality defects. Take accountability for all quality, safety, and deliver output per value stream.',
                'Powder coat associate- Time management of paint cycles per value stream, organization of hooks and hangers for paint parts. Create standards for hang and rotation of hooks.',
            ],
            tabs: [
                'Vision Plastics',
                'Pioneer Truck Weld',
                'ATI',
                'Excel Industries',
            ],
            selectedTab: 0
        }
    },
    template: `
    <div class="work">
    <div class="tabWrapper">
    <span
    class="tabs"
      :class="{ activeTab: selectedTab === index }" 
    v-for="(tab, index) in tabs" 
    @click="selectedTab = index">
    {{ tab }}</span>
    </div>
    <div>
    <div v-if="selectedTab == 0">
    <ul v-for="work in work1">
    <li>{{ work }}</li>
    </ul>
    </div>
    <div v-else-if="selectedTab == 1">
    <ul v-for="work in work2">
    <li>{{ work }}</li>
    </ul>
    </div>
    <div v-else-if="selectedTab == 2">
    <ul v-for="work in work3">
    <li>{{ work }}</li>
    </ul>
    </div>
    <div v-else="selectedTab == 3">
    <ul v-for="work in work4">
    <li>{{ work }}</li>
    </ul>
    </div>
    `,
})

Vue.component('reference', {
    data() {
        return {
            ref1: ['Scott Beaman', 'Engineer Manager', '(503) 329-7957'],
            ref2: ['Fenya Ivanov', 'Assistant Assembly Supervisor', '(971) 338-0477']
        }
    },
    template:`
    <div class='reference'>
    <h3>References:</h3>
    <div class="ref1">
    <ul>
    <p  v-for="ref in ref1">{{ ref }}</p>
    </ul>
    </div>
    <div class="ref2">
     <ul>
    <p v-for="ref in ref2">{{ ref }}</p>
    </ul>
    </div>
</div>
    `,
})


var app = new Vue({
    el: '#app',
    data: {

    }
})