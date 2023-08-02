import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const SvgContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const Polyline = styled.polyline`
  fill: none;
  stroke: white;
  stroke-width: 2;
`;

const Circle = styled.circle`
  fill: white;
`;

interface Point {
  x: number;
  y: number;
}

interface Pointer {
  x: number;
  y: number;
  tx: number;
  ty: number;
  dist: number;
  scale: number;
  speed: number;
  circRadius: number;
  updateCrds: () => void;
}

export function MouseEffect() {
  const polylineRef = useRef<SVGPolylineElement | null>(null);
  const circleRef = useRef<SVGCircleElement | null>(null);

  const total = 12;
  const speed = 2;
  const circRadius = 8;

  const pointer: Pointer = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    tx: 0,
    ty: 0,
    dist: 0,
    scale: 1,
    speed: speed,
    circRadius: circRadius,
    updateCrds: function () {
      if (this.x !== 0) {
        this.dist = Math.abs(this.x - this.tx + (this.y - this.ty));
        this.scale = Math.max(
          this.scale + ((100 - this.dist * 8) * 0.01 - this.scale) * 0.1,
          0.25
        );
        this.tx += (this.x - this.tx) / this.speed;
        this.ty += (this.y - this.ty) / this.speed;
      }
    },
  };

  const points: Point[] = [];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      drawLine();
    };

    const handleMouseDown = () => {
      pointer.circRadius = 6;
      drawLine();
    };

    const handleMouseUp = () => {
      pointer.circRadius = 8;
      drawLine();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const drawLine = () => {
    pointer.updateCrds();

    points.push({
      x: pointer.tx,
      y: pointer.ty,
    });
    while (points.length > total) {
      points.shift();
    }
    const pointsArr = points.map((point) => `${point.x},${point.y}`);
    const polyPoints = pointsArr.join(' ');

    polylineRef.current?.setAttribute('points', polyPoints);

    circleRef.current?.setAttribute('cx', pointer.x.toString());
    circleRef.current?.setAttribute('cy', pointer.y.toString());
    circleRef.current?.setAttribute(
      'r',
      (pointer.scale * pointer.circRadius).toString()
    );
  };

  return { SvgContainer, Polyline, Circle, polylineRef, circleRef };
}
