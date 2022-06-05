import {
  StarndartCard,
} from '../../ui-components';
import {AmplifyProvider} from "@aws-amplify/ui-react";
interface Props {
}

function AmplifyStudioPage(props: Props) {
  return (
    <div>
      Amplify studio
      <AmplifyProvider>
        <StarndartCard
          imagePath="https://r.r10s.jp/evt/event/rmagazine/interview/suzukiairi/_pc/img/suzukiairi_article1.jpg"
          title="鈴木愛理"
        />
      </AmplifyProvider>
      <p>after</p>
    </div>
  );
}

export default AmplifyStudioPage;