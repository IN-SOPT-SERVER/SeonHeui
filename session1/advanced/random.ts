/* 

도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기

*/

interface Member {
    name: string;
    group: string;
}

interface Dinner {
    member: Array<Member>;
    menu: Array<string>;
    shuffle(array: Array<any>): Array<any>;
    organize(array: Array<Member>): void;
}

const dinner:Dinner = {
    member: [
      {
        name: "권세훈",
        group: "ob",
      },
      {
        name: "전선희",
        group: "yb",
      },
      {
        name: "김민욱",
        group: "ob",
      },
      {
        name: "박서원",
        group: "yb",
      },
      {
        name: "장한빛",
        group: "yb",
      },
    ],
    menu: ['피자', '초밥', '치킨', '파스타', '쭈꾸미',],
    shuffle(array) {
      array.sort(() => Math.random() - 0.5);
      return array;
    },
    organize(array) {
      const dinnerMember: Array<Member> = this.shuffle(array);
      const dinnerMenu: string = this.shuffle(this.menu)[0];
      console.log(`${dinnerMember[0].name}과 ${dinnerMember[1].name}님! ${dinnerMenu} 추천드립니다!`);
    },
};
  
dinner.organize(dinner.member);