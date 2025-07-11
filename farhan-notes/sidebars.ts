import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Java',
      items: [
        'java/index',
        {
          type: 'category',
          label: 'OOPS',
          items: [
            'java/OOPS/encapsulation',
            'java/OOPS/inheritance',
            'java/OOPS/polymorphism',
            'java/OOPS/abstraction',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'AWS',
      items: [
        'aws/index',
        'aws/aws-s3',
      ],
    },
    {
      type: 'category',
      label: 'Kubernetes',
      items: [
        'kubernetes/index',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Concepts & Theories',
    //   items: [
    //     'concepts/index',
    //   ],
    // },
  ],
};

export default sidebars;
