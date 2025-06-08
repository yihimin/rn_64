# 🔮 Fortune Teller

손택의 점괘를 모바일에서 간편하게 체험할 수 있는 React Native 앱입니다.  
사용자가 막대기 중 하나를 선택하면 무작위 점괘가 제공되며, 결과는 기록으로 저장할 수 있습니다. 인앱 결제 모듈은 모의 방식으로 구현되었고, Haptics로 사용자 경험을 향상시켰습니다.

## ✨ 주요 기능

- 막대기 뽑기 애니메이션
- 진동 효과(Haptics)로 실감나는 상호작용
- 점괘 결과 출력 및 상세 설명
- '기억하기'를 통한 점괘 기록 기능
- 결제 여부에 따른 점괘 잠금/해제 처리 (가짜 결제 구현)
- 다크 모드에 최적화된 UI

## 🛠️ 기술 스택

- **React Native** (Expo 기반)
- **Zustand** – 상태 관리
- **Expo Haptics** – 진동 효과
- **React Navigation** – 화면 전환
- **TypeScript**

## 📁 폴더 구조

```

src/
├── constants/
│   └── fortuneData.ts       # 점괘 데이터
├── screens/
│   ├── IntroScreen.tsx      # 점괘 뽑기 화면
│   └── ResultScreen.tsx     # 결과 출력 화면
├── store/
│   ├── usePurchaseStore.ts  # 결제 여부 저장
│   └── useHistoryStore.ts   # 기록 저장
App.tsx

````

## ▶️ 실행 방법

```bash
# 프로젝트 설치
npm install

# 앱 실행 (Expo)
npm run start
````

Expo Go 앱을 통해 실시간 테스트가 가능합니다.

## ▶️ 실행 화면
https://github.com/user-attachments/assets/52123afa-bf33-42d4-bcde-32c2782b89b4

## 💳 결제 시나리오

* 실제 결제가 아닌 상태 기반의 '모의 결제'를 구현했습니다.
* `purchase()` 함수 호출 시 `purchased` 상태가 true로 변경됩니다.

## 📓 기록 기능

* `기억하기 📝` 버튼 클릭 시, 현재 점괘가 로컬 상태에 저장됩니다.
* `zustand`를 활용하여 기록 관리가 간편합니다.





