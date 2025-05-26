import { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import { Container } from "@mui/material";

export default function Banner5() {
  const targetCounts = [68, 43, 15, 432, 533, 98.7, 93.4, 98];
  const animationDuration = 3000;
  const [counts, setCounts] = useState(targetCounts.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerRef = useRef(null);

  const cardImages = [
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDM2IDM2Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzMgMTlhMSAxIDAgMCAxLS43MS0uMjlMMTggNC40MUwzLjcxIDE4LjcxQTEgMSAwIDAgMSAyLjMgMTcuM2wxNS0xNWExIDEgMCAwIDEgMS40MSAwbDE1IDE1QTEgMSAwIDAgMSAzMyAxOSIgY2xhc3M9ImNsci1pLXNvbGlkIGNsci1pLXNvbGlkLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOCA3Ljc5TDYgMTkuODNWMzJhMiAyIDAgMCAwIDIgMmg3VjI0aDZ2MTBoN2EyIDIgMCAwIDAgMi0yVjE5Ljc2WiIgY2xhc3M9ImNsci1pLXNvbGlkIGNsci1pLXNvbGlkLXBhdGgtMiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMzZ2MzZIMHoiLz48L3N2Zz4=", // Card 1
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMCAxN2EyIDIgMCAwIDAgMi0yVjRhMiAyIDAgMCAwLTItMkg5LjQ2Yy4zNS42MS41NCAxLjMuNTQgMmgxMHYxMWgtOXYybTQtMTB2Mkg5djEzSDd2LTZINXY2SDN2LThIMS41VjlhMiAyIDAgMCAxIDItMnpNOCA0YTIgMiAwIDAgMS0yIDJhMiAyIDAgMCAxLTItMmEyIDIgMCAwIDEgMi0yYTIgMiAwIDAgMSAyIDIiIC8+Cjwvc3ZnPg==", // Card 2
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMS40MiAxNS4xN0wxNy4yNSAyMUEyLjY1MiAyLjY1MiAwIDAgMCAyMSAxNy4yNWwtNS44NzctNS44NzdNMTEuNDIgMTUuMTdsMi40OTYtMy4wM2MuMzE3LS4zODQuNzQtLjYyNiAxLjIwOC0uNzY2TTExLjQyIDE1LjE3bC00LjY1NSA1LjY1M2EyLjU0OCAyLjU0OCAwIDEgMS0zLjU4Ni0zLjU4Nmw2LjgzNy01LjYzbTUuMTA4LS4yMzNjLjU1LS4xNjQgMS4xNjMtLjE4OCAxLjc0My0uMTRxLjE5LjAxNy4zODQuMDE3YTQuNSA0LjUgMCAwIDAgNC4xMDItNi4zNTJsLTMuMjc2IDMuMjc2YTMgMyAwIDAgMS0yLjI1LTIuMjVsMy4yNzYtMy4yNzZhNC41IDQuNSAwIDAgMC02LjMzNiA0LjQ4NmMuMDkxIDEuMDc2LS4wNzEgMi4yNjQtLjkwNCAyLjk1bC0uMTAyLjA4NW0tMS43NDUgMS40MzdMNS45MDkgNy41SDQuNUwyLjI1IDMuNzVsMS41LTEuNUw3LjUgNC41djEuNDA5bDQuMjYgNC4yNm0tMS43NDUgMS40MzdsMS43NDUtMS40MzdtNi42MTUgOC4yMDZMMTUuNzUgMTUuNzVNNC44NjcgMTkuMTI1aC4wMDh2LjAwOGgtLjAwOHoiLz48L3N2Zz4=", // Card 3
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Im0xOSA1bC03LTNsLTcgM2wzLjUgMS41djJTOS42NjcgOCAxMiA4czMuNS41IDMuNS41di0yem0wIDB2NG0tMy41LS41djFhMy41IDMuNSAwIDEgMS03IDB2LTFtLS43MTcgOC4yMDNjLTEuMS42ODUtMy45ODYgMi4wODItMi4yMjkgMy44MzFDNi40MTMgMjEuMzkgNy4zNyAyMiA4LjU3MSAyMmg2Ljg1OGMxLjIwMiAwIDIuMTU4LS42MTEgMy4wMTctMS40NjZjMS43NTctMS43NDktMS4xMjgtMy4xNDYtMi4yMjktMy44M2E3Ljk5IDcuOTkgMCAwIDAtOC40MzQgMCIgY29sb3I9IiNmZmYiLz48L3N2Zz4=", // Card 4
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTEuODc1IDIwcS4xIDAgLjItLjA1dC4xNS0uMWw4LjItOC4ycS4zLS4zLjQzOC0uNjc1dC4xMzctLjc1cTAtLjQtLjEzNy0uNzYzdC0uNDM4LS42MzdsLTQuMjUtNC4yNXEtLjI3NS0uMy0uNjM4LS40MzdUMTQuNzc2IDRxLS4zNzUgMC0uNzUuMTM4dC0uNjc1LjQzN2wtLjI3NS4yNzVsMS44NSAxLjg3NXEuMzc1LjM1LjU1Ljh0LjE3NS45NXEwIDEuMDUtLjcxMiAxLjc2M3QtMS43NjMuNzEycS0uNSAwLS45NjItLjE3NXQtLjgxMy0uNTI1TDkuNTI1IDguNEw1LjE1IDEyLjc3NXEtLjA3NS4wNzUtLjExMi4xNjNUNSAxMy4xMjVxMCAuMi4xNS4zNjN0LjM1LjE2MnEuMSAwIC4yLS4wNXQuMTUtLjFsMy40LTMuNGwxLjQgMS40bC0zLjM3NSAzLjRxLS4wNzUuMDc1LS4xMTIuMTYzdC0uMDM4LjE4N3EwIC4yLjE1LjM1dC4zNS4xNXEuMSAwIC4yLS4wNXQuMTUtLjFsMy40LTMuMzc1bDEuNCAxLjRsLTMuMzc1IDMuNHEtLjA3NS4wNS0uMTEyLjE1dC0uMDM4LjJxMCAuMi4xNS4zNXQuMzUuMTVxLjEgMCAuMTg4LS4wMzh0LjE2Mi0uMTEybDMuNC0zLjM3NWwxLjQgMS40bC0zLjQgMy40cS0uMDc1LjA3NS0uMTEyLjE2MnQtLjAzOC4xODhxMCAuMi4xNjMuMzV0LjM2Mi4xNW0tLjAyNSAycS0uOTI1IDAtMS42MzctLjYxMnQtLjgzOC0xLjUzOHEtLjg1LS4xMjUtMS40MjUtLjd0LS43LTEuNDI1cS0uODUtLjEyNS0xLjQxMi0uNzEyVDUuMTUgMTUuNnEtLjk1LS4xMjUtMS41NS0uODI1dC0uNi0xLjY1cTAtLjUuMTg4LS45NjJ0LjUzNy0uODEzbDUuOC01Ljc3NUwxMi44IDguODVxLjA1LjA3NS4xNS4xMTN0LjIuMDM3cS4yMjUgMCAuMzc1LS4xMzd0LjE1LS4zNjNxMC0uMS0uMDM4LS4ydC0uMTEyLS4xNUw5Ljk1IDQuNTc1cS0uMjc1LS4zLS42MzctLjQzN1Q4LjU1IDRxLS4zNzUgMC0uNzUuMTM4dC0uNjc1LjQzN0wzLjYgOC4xMjVxLS4yMjUuMjI1LS4zNzUuNTI1dC0uMi42dDAgLjYxM3QuMi41ODdsLTEuNDUgMS40NXEtLjQyNS0uNTc1LS42MjUtMS4yNjJUMSA5LjI1dC4zNS0xLjM2MnQuODI1LTEuMTg4TDUuNyAzLjE3NVE2LjMgMi42IDcuMDM4IDIuM1Q4LjU1IDJ0MS41MTMuM3QxLjMxMi44NzVsLjI3NS4yNzVsLjI3NS0uMjc1cS42LS41NzUgMS4zMzgtLjg3NXQxLjUxMi0uM3QxLjUxMy4zdDEuMzEyLjg3NUwyMS44MjUgNy40cS41NzUuNTc1Ljg3NSAxLjMyNXQuMyAxLjUyNXQtLjMgMS41MTN0LS44NzUgMS4zMTJsLTguMiA4LjE3NXEtLjM1LjM1LS44MTIuNTV0LS45NjMuMk05LjM3NSA4Ii8+PC9zdmc+", // Card 5
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTcuNzUgMTRjLS4xMyAwLS4yNy0uMDItLjQtLjA2YTEuMjUgMS4yNSAwIDAgMS0uODUtMS4xOXYtMS43NmMtMS40LS4xMy0yLjUtMS4zMS0yLjUtMi43NHYtMy41QzE0IDMuMjMgMTUuMjMgMiAxNi43NSAyaDYuNUMyNC43NyAyIDI2IDMuMjMgMjYgNC43NXYzLjVDMjYgOS43NyAyNC43NyAxMSAyMy4yNSAxMWgtMi42MmwtMS44OCAyLjVjLS4yNC4zMi0uNjEuNS0xIC41bS0xLTEwLjVjLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1djMuNWMwIC42OS41NiAxLjI1IDEuMjUgMS4yNUgxOFYxMmwxLjg4LTIuNWgzLjM4Yy42OSAwIDEuMjUtLjU2IDEuMjUtMS4yNXYtMy41YzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNXptLTcuMjUgMTNhNC4yNiA0LjI2IDAgMCAxLTQuMjUtNC4yNUE0LjI2IDQuMjYgMCAwIDEgOS41IDhhNC4yNiA0LjI2IDAgMCAxIDQuMjUgNC4yNUE0LjI2IDQuMjYgMCAwIDEgOS41IDE2LjVtMC03Yy0xLjUyIDAtMi43NSAxLjIzLTIuNzUgMi43NVM3Ljk4IDE1IDkuNSAxNXMyLjc1LTEuMjMgMi43NS0yLjc1UzExLjAyIDkuNSA5LjUgOS41TTMuNDcxIDIzLjkyQzQuNzgxIDI1LjMgNi44MTEgMjYgOS41MDEgMjZzNC43Mi0uNyA2LjAzLTIuMDhjMS41MjItMS42MSAxLjQ3My0zLjU1MyAxLjQ3LTMuNjg0di0uMDA2YzAtMS4yMy0xLTIuMjMtMi4yMy0yLjIzSDQuMjMxYy0xLjIzIDAtMi4yMyAxLTIuMjMgMi4xOXYuMDEzYy0uMDA0LjE5LS4wNDIgMi4xMTcgMS40NyAzLjcxN20uMDMtMy42OWMwLS40LjMzLS43My43My0uNzNoMTAuNTRjLjQgMCAuNzMuMzMuNzMuNzd2LjAwMmEzLjk4IDMuOTggMCAwIDEtMS4wNiAyLjYxOGMtMS4wMSAxLjA3LTIuNjkgMS42MS00Ljk0IDEuNjFzLTMuOS0uNTMtNC45Mi0xLjU5YTMuOSAzLjkgMCAwIDEtMS4wOC0yLjY2OXoiLz48L3N2Zz4=", // Card 6
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxwYXRoIGQ9Ik0xNi4wNjEgMTAuNDA0TDE0IDE3aC00bC0yLjA2MS02LjU5NmE2IDYgMCAwIDEgLjk5OC01LjQ4NGwyLjU5LTMuMzE1YS42LjYgMCAwIDEgLjk0NiAwbDIuNTkgMy4zMTVhNiA2IDAgMCAxIC45OTggNS40ODRNMTAgMjBjMCAyIDIgMyAyIDNzMi0xIDItM20tNS41LTcuNUM1IDE1IDcgMTkgNyAxOWwzLTJtNS45MzEtNC41YzMuNSAyLjUgMS41IDYuNSAxLjUgNi41bC0zLTIiLz48cGF0aCBkPSJNMTIgMTFhMiAyIDAgMSAxIDAtNGEyIDIgMCAwIDEgMCA0Ii8+PC9nPjwvc3ZnPg==", // Card 7
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjAgMTdxLjg2IDAgMS40NS42dC41OCAxLjRMMTQgMjJsLTctMnYtOWgxLjk1bDcuMjcgMi42OXEuNzguMzEuNzggMS4xMnEwIC40Ny0uMzQuODJ0LS44Ni4zN0gxM2wtMS43NS0uNjdsLS4zMy45NEwxMyAxN3pNMTYgMy4yM1ExNy4wNiAyIDE4LjcgMnExLjM2IDAgMi4zIDF0MSAyLjNxMCAxLjAzLTEgMi40NnQtMS45NyAyLjM5VDE2IDEzcS0yLjA4LTEuODktMy4wNi0yLjg1dC0xLjk3LTIuMzlUMTAgNS4zcTAtMS4zNi45Ny0yLjN0Mi4zNC0xcTEuNiAwIDIuNjkgMS4yM00uOTg0IDExSDV2MTFILjk4NHoiLz48L3N2Zz4=",
  ];

  const animateCount = (index, target) => {
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);

      setCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        if (Number.isInteger(targetCounts[index])) {
          newCounts[index] = Math.floor(progress * target);
        } else {
          newCounts[index] = Math.round(progress * target * 10) / 10;
        }
        return newCounts;
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const animateAll = () => {
      setHasAnimated(true);
      targetCounts.forEach((target, index) => {
        animateCount(index, target);
      });
    };

    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        animateAll();
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const fallbackCheck = () => {
      if (!containerRef.current || hasAnimated) return;

      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        animateAll();
      }
    };

    window.addEventListener("scroll", fallbackCheck);
    window.addEventListener("resize", fallbackCheck);
    fallbackCheck();

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
      window.removeEventListener("scroll", fallbackCheck);
      window.removeEventListener("resize", fallbackCheck);
    };
  }, [hasAnimated, targetCounts, animationDuration]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "1rem",
        marginBottom: "8rem",
      }}
      ref={containerRef}
    >
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-0 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center w-full max-w-screen-2xl">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
            <div key={index} className="w-full flex justify-center px-2">
              <div className="w-full max-w-2xl h-[420px] mt-3 rounded-3xl bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:border-violet-800 border border-sky-300 flex flex-col items-center justify-center p-6 shadow-md">
                <div className="flex justify-center mb-6">
                  <div className="relative w-[160px] h-[160px] bg-sky-500 rounded-full border border-sky-300">
                    <div className="w-[140px] h-[125px] bg-sky-500 object-contain rounded-full z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img
                        src={cardImages[index]}
                        className="w-full h-full object-contain rounded-full"
                        alt={`Card ${index + 1}`}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mb-4 border-b border-sky-300 mx-auto w-1/2" />
                <h2 className="text-center text-[35px] sm:text-[45px] md:text-[55px] lg:text-[66px] text-sky-500  mb-2">
                  {Number.isInteger(targetCounts[index])
                    ? Math.floor(counts[index])
                    : counts[index].toFixed(1).replace(/\.0+$/, "")}
                  {(index === 5 || index === 6 || index === 7) && "%"}
                </h2>
                <h3
                  className="text-center text-base sm:text-lg md:text-2xl mt-[5px] min-h-[48px] text-gray-600 leading-snug"
                  style={{ fontWeight: "normal" }}
                >
                  {[
                    "anni di attività",
                    "formatori/educatori per i nostri ragazzi",
                    "I nostri laboratori ",
                    " I nostri iscritti",
                    "Collaborazioni con le aziende",
                    "Feedback delle aziende sullo stage",
                    "Raggiungimento obiettivi e potenziale dello stage",
                    "Gradimento famiglie",
                  ][index].toLowerCase()}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
