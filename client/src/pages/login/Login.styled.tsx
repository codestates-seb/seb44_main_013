import tw from 'twin.macro';

export const LoginWrapper = tw.div`
    bg-BASIC_BLACK
    w-screen
    h-screen
    flex
    flex-row
    justify-center
    items-center
`;

export const LoginSection = tw.div`
    px-2
    py-10
    text-BASIC_WHITE
    mr-32
    ml-32
    min-w-[430px]
    flex
    flex-col
    items-center
`;

export const TitleSection = tw.div`
    font-bold
    text-BASIC_WHITE
    text-4xl
    leading-snug
`;

export const ContentSection02 = tw.li`
    font-normal
    text-BASIC_WHITE
    text-sm
    my-8
`;

export function WriteSection() {
  return (
    <ul className="list-disc w-[380px]">
      <ContentSection02>
        우리는 예술과 비즈니스의 접점에서 높은 품질과 창의성을 제공합니다.
      </ContentSection02>
      <ContentSection02>
        우리의 포트폴리오 전시는 기업들이 풍부한 창작물과 혁신적인 아이디어를
        통해 시장에서 돋보일 수 있도록 도와줍니다.
      </ContentSection02>
      <ContentSection02>
        우리의 포트폴리오 전시는 기업들이 독보적인 시각적 아이덴티티를 구축하고,
        브랜드의 목표를 달성하기 위한 효과적인 솔루션을 제공합니다.
      </ContentSection02>
      <ContentSection02>
        우리의 포트폴리오 전시는 기업들이 차별화된 디자인과 탁월한
        커뮤니케이션을 통해 목표를 달성할 수 있도록 돕습니다.
      </ContentSection02>
      <ContentSection02>
        탁월한 디자인과 뛰어난 실행력으로 구성된 우리의 포트폴리오 전시는
        기업들에게 차별화된 비전과 가능성을 제시합니다.
      </ContentSection02>
      <ContentSection02>
        외주 프로젝트를 위한 완벽한 파트너를 찾으시나요? 저희 중개 사이트는
        다양한 분야의 전문가들과의 연결을 도와드립니다.
      </ContentSection02>
    </ul>
  );
}

export const ContentSection = tw.div`
    font-normal
    text-BASIC_WHITE
    text-base
    my-8
`;

export const MiddleWrapper = tw.div`
    flex
    flex-row
    my-4
`;

export const MiddleLine = tw.h1`
    my-4
    text-BASIC_WHITE
    block
    w-44
    border-BASIC_WHITE
    border-t-2
`;

export const HorizonLine = tw.div`
    border-BASIC_WHITE
    border-l-2
    h-[500px]
`;
