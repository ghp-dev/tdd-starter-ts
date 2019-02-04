export class Diamond {

  private  alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  private startLetter = 'A';
  private padString = '_';

  getDiamondFor(stopLetter: string): string {

    const upperLeftQuadrant: string[] =
      this.getLettersFromStartUpTo(stopLetter)
        .map(currentLetter =>
          this.getLineFragment(currentLetter, stopLetter));

    return this.mirror(
      upperLeftQuadrant
        .map(fragment =>
          this.mirrorDetail(fragment)
        ))
        .toString();
  }

  mirror(topQuadrantsIncludingMirrorAxis: string[]): string[] {

    return topQuadrantsIncludingMirrorAxis
      .concat(topQuadrantsIncludingMirrorAxis
        .slice(0, -1)
        .reverse());
  }

  mirrorDetail(detail: string): string {
    return this.mirror(
      Array.from(detail))
      .join('')
      .toString();
  }

  getLineFragment(current: string, stopLetter: string): string {

    const lineWidth = this.getLineWidth(stopLetter);
    const distance = this.getDistanceToStartLetter(current);
    const leftPadding = lineWidth - distance;

    return current
      .padStart(leftPadding, this.padString)
      .padEnd(lineWidth, this.padString);
  }

  private getLettersFromStartUpTo(stopLetter: string) {
    return this.alphabet
      .slice(0,
        this.alphabet.indexOf(stopLetter) + 1);
  }

  private getDistanceToStartLetter(current: string) {
    return this.alphabet.indexOf(current)
      - this.alphabet.indexOf(this.startLetter);
  }

  private getLineWidth(stopLetter: string) {
    return this.alphabet
      .indexOf(stopLetter)
      - this.alphabet.indexOf(this.startLetter) + 1;
  }
}
