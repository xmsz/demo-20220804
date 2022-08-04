import Guide from '@/components/Guide';
import { init, skeleton } from '@alilc/lowcode-engine';
import { useEffect } from 'react';

const Home = () => {
  skeleton.add({
    area: 'topArea',
    type: 'Widget',
    name: 'logo',
    // content: YourFantaticLogo,
    contentProps: {
      logo: 'https://img.alicdn.com/tfs/TB1_SocGkT2gK0jSZFkXXcIQFXa-66-66.png',
      href: '/',
    },
    props: {
      align: 'left',
      width: 100,
    },
  });

  useEffect(() => {
    init(document.getElementById('lce')!);
  }, []);

  return <div id="lce" />;
};

export default Home;
