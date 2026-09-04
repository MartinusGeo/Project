export function hitung(angka1, angka2, operator) { // kenapa menggunakan export function? karena kita ingin fungsi ini bisa digunakan di file lain
  switch (operator) {
    case '+':
      return angka1 + angka2;
    case '-':
      return angka1 - angka2;
    case '*':
      return angka1 * angka2;
    case '/':
      // Antisipasi jika pembagian dengan angka 0
      if (angka2 == 0) {
        return "Error: Tidak bisa dibagi dengan 0";
      }
      return angka1 / angka2;
    default:
      return "Operator tidak dikenali!";
  }
}