import React from 'react'

interface WithTitleProps {
    title?: string;
    children?: any;
  }

const withTitle = (WrapperComponent: React.FC<WithTitleProps>) => {
    return ({title, children}: WithTitleProps) => {
        return (
            <WrapperComponent title={title} >
                <div>
                    <h5 >{title}</h5>
                </div>
                {children}
            </WrapperComponent>
        )
    }
}


const SectionHoc: React.FC<WithTitleProps> = withTitle(
    ({children}: WithTitleProps) => {
        return <div>{children}</div>
    }
) 

export default SectionHoc