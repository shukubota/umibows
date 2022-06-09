import {
  StarndartCard,
  SampleCard,
  SampleBalloon,
} from '../../ui-components';
import {
  AmplifyProvider
} from "@aws-amplify/ui-react";
interface Props {
}

const data = [
  {
    name: "橋本環奈",
    teamName: "Rev. from DVL",
    imageUrl: "https://image.entertainment-topics.jp/article/original/14091.jpg",
    script: "中身が色々"
  },
  {
    name: "リヴァイ兵長",
    teamName: "調査兵団",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQbT8sqC0hvT0ssCq8VFQAgl27b1jqsE7Vw&usqp=CAU",
    script: "変えられるよ"
  },
  {
    name: "西野七瀬",
    teamName: "乃木坂46",
    imageUrl: "https://img.popnroll.tv/uploads/news_item/image/1767/large__E4_0290.JPG",
    script: "テキストテキストテキスト"
  },
  {
    name: "さいたま",
    teamName: "ヒーロー協会",
    imageUrl: "https://dthezntil550i.cloudfront.net/xn/latest/xn1710241854093130003866512/1280_960/28f9dc76-d400-4534-9468-88f7e22d33f0.png",
    script: "テキストテキストテキスト"
  },
  {
    name: "橋本環奈",
    teamName: "Rev. from DVL",
    imageUrl: "https://image.entertainment-topics.jp/article/original/14091.jpg",
    script: "テキストテキストテキスト"
  },
  {
    name: "橋本環奈",
    teamName: "Rev. from DVL",
    imageUrl: "https://image.entertainment-topics.jp/article/original/14091.jpg",
    script: "テキストテキストテキスト"
  },
  {
    name: "橋本環奈",
    teamName: "Rev. from DVL",
    imageUrl: "https://image.entertainment-topics.jp/article/original/14091.jpg",
    script: "テキストテキストテキスト"
  },
]

function AmplifyStudioPage(props: Props) {
  return (
    <AmplifyProvider>
      <div className="flex flex-wrap">
        {data.map((item, index) =>
          <div key={`${item.name}-${index}`} className="mx-3 my-3">
            <SampleCard
              name={item.name}
              teamName={item.teamName}
              imageUrl={item.imageUrl}
            />
            <SampleBalloon
              value={item.script}
            />
          </div>
        )}
      </div>
    </AmplifyProvider>
  );
}

export default AmplifyStudioPage;