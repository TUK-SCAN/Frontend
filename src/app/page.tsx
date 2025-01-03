import Accordion from './_components/Accordion'
import CheckButton from './_components/CheckButton'

const App = () => {
  return (
    <div>
      <CheckButton size="small" />
      <CheckButton size="big" />
      <Accordion
        title="재단 관련 규정 어쩌구"
        contents={
          <>
            <p>스캐너는 최대 216 x 356mm 크기의 문서를 스캔할 수 있습니다.</p>
            <p>
              이는 A4보다 큰 크기로, 규격이 넘는 색은 스캔이 어려울 수 있음을
              알려드립니다.
            </p>
          </>
        }
      />
    </div>
  )
}
export default App
