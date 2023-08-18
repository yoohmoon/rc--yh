const convertMonthToEng = (month: string): string => {
  const koreanMonths = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];
  const englishMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const index = koreanMonths.indexOf(month);

  if (index === -1) return '';
  return englishMonths[index];
};

export const parseDateRange = (dateString: string) => {
  // dateString에서 월, 일을 추출하여 Date()객체 생성하는 로직
  //   Date()객체 :  0-based index - 1월은 0, 2월은 1, ..., 12월은 11
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  //   "date": "9월 18일~10월 19일",
  //   정규 표현식 공백(\s), 물결표(~) 또는 '일' 문자를 기준으로 문자열을 분리함
  const parts = dateString
    .split(/\s|~|일/)
    .filter((part) => part.trim() !== '');
  console.log(parts);

  let startMonth, startDay, endMonth, endDay;

  if (parts.length === 3) {
    [startMonth, startDay, endDay] = parts;
    endMonth = startMonth;
  } else {
    // 구조 분해 할당 : 배열 또는 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 함
    [startMonth, startDay, endMonth, endDay] = parts;
  }

  startMonth = convertMonthToEng(startMonth);
  endMonth = convertMonthToEng(endMonth);

  const currentYear = new Date().getFullYear();

  console.log('end date in module! ', endDay);

  return {
    startDate: new Date(
      currentYear,
      months.indexOf(startMonth),
      parseInt(startDay)
    ),
    endDate: new Date(currentYear, months.indexOf(endMonth), parseInt(endDay)),
  };
};
