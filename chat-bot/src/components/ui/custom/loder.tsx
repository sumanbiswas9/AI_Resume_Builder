
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="flex items-center gap-2">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center font-semibold text-sm self-start"> {/* Added self-start */}
          AI+
        </div>
        <div className="loader"></div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
/* HTML: <div class="loader"></div> */
.loader {
  height: 15px;
  aspect-ratio: 2.5;
  --_g: no-repeat radial-gradient(farthest-side,#1d4ed8 90%,#0000);
  background:var(--_g), var(--_g), var(--_g), var(--_g);
  background-size: 20% 50%;
  animation: l43 1s infinite linear; 
}
@keyframes l43 {
  0%     {background-position: calc(0*100%/3) 50% ,calc(1*100%/3) 50% ,calc(2*100%/3) 50% ,calc(3*100%/3) 50% }
  16.67% {background-position: calc(0*100%/3) 0   ,calc(1*100%/3) 50% ,calc(2*100%/3) 50% ,calc(3*100%/3) 50% }
  33.33% {background-position: calc(0*100%/3) 100%,calc(1*100%/3) 0   ,calc(2*100%/3) 50% ,calc(3*100%/3) 50% }
  50%    {background-position: calc(0*100%/3) 50% ,calc(1*100%/3) 100%,calc(2*100%/3) 0   ,calc(3*100%/3) 50% }
  66.67% {background-position: calc(0*100%/3) 50% ,calc(1*100%/3) 50% ,calc(2*100%/3) 100%,calc(3*100%/3) 0   }
  83.33% {background-position: calc(0*100%/3) 50% ,calc(1*100%/3) 50% ,calc(2*100%/3) 50% ,calc(3*100%/3) 100%}
  100%   {background-position: calc(0*100%/3) 50% ,calc(1*100%/3) 50% ,calc(2*100%/3) 50% ,calc(3*100%/3) 50% }
}
`;

export default Loader;
