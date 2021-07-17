  
import styled from "styled-components"

export interface ParagraphProps{
    size?: 'default' | 'small',
    children: React.ReactNode
}

export default function Paragraph ({ size, children }: ParagraphProps) {
  
    return <StyledParagraph size={size || 'default'}>
      { children }
    </StyledParagraph>
  }
  
  const StyledParagraph = styled.p<{size: 'default' | 'small'}>`
    font-size: ${p => p.size === 'default' ? '14px' : '12px'};
    line-height: ${p => p.size === 'default' ? '25px' : '20px'};
    color: #274060;


  `
  