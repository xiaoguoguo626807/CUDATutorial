/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

    // But you can create a sidebar manually

    // tutorialSidebar: [{
    //     type: 'category',
    //     label: 'React',
    //     items: ['react'],
    // }, ],

    build_dev_env: [
        {
            type: 'category',
            label: '介绍',
            items: ['index'],
        },
        {
            type: 'category',
            label: '新手村系列',
            items: [
                {
                    type: 'autogenerated',
                    dirName: '01_build_dev_env'
                },
                {
                    type: 'autogenerated',
                    dirName: '02_first_kernel'
                },
                {
                    type: 'autogenerated',
                    dirName: '03_nvprof_usage'
                },
                {
                    type: 'autogenerated',
                    dirName: '04_first_refine_kernel'
                },
            ],
        },
        {
            type: 'category',
            label: '初级系列',
            items: [
                {
                    type: 'autogenerated',
                    dirName: '05_intro_parallel',
                },
                {
                    type: 'autogenerated',
                    dirName: '06_impl_matmul'
                },
                {
                    type: 'autogenerated',
                    dirName: '07_optimize_matmul'
                }
            ],
        },
        {
            type: 'category',
            label: '中级系列',
            items: [
                {
                    type: 'autogenerated',
                    dirName: '08_impl_reduce'
                },
                {
                    type: 'category',
                    label: 'Reduce 性能优化实践',
                    items: [
                        {
                            type: "autogenerated",
                            dirName: "09_optimize_reduce/01_interleaved_addressing"
                        }
                    ]
                }
            ],
        }
    ]
};

module.exports = sidebars;
