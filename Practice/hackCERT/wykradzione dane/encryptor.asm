
./encryptor:     file format elf64-x86-64


Disassembly of section .init:

0000000000400540 <_init>:
  400540:	48 83 ec 08          	sub    $0x8,%rsp
  400544:	48 8b 05 ad 1a 20 00 	mov    0x201aad(%rip),%rax        # 601ff8 <_DYNAMIC+0x1d0>
  40054b:	48 85 c0             	test   %rax,%rax
  40054e:	74 05                	je     400555 <_init+0x15>
  400550:	e8 9b 00 00 00       	callq  4005f0 <fwrite@plt+0x10>
  400555:	48 83 c4 08          	add    $0x8,%rsp
  400559:	c3                   	retq   

Disassembly of section .plt:

0000000000400560 <putchar@plt-0x10>:
  400560:	ff 35 a2 1a 20 00    	pushq  0x201aa2(%rip)        # 602008 <_GLOBAL_OFFSET_TABLE_+0x8>
  400566:	ff 25 a4 1a 20 00    	jmpq   *0x201aa4(%rip)        # 602010 <_GLOBAL_OFFSET_TABLE_+0x10>
  40056c:	0f 1f 40 00          	nopl   0x0(%rax)

0000000000400570 <putchar@plt>:
  400570:	ff 25 a2 1a 20 00    	jmpq   *0x201aa2(%rip)        # 602018 <_GLOBAL_OFFSET_TABLE_+0x18>
  400576:	68 00 00 00 00       	pushq  $0x0
  40057b:	e9 e0 ff ff ff       	jmpq   400560 <_init+0x20>

0000000000400580 <fread@plt>:
  400580:	ff 25 9a 1a 20 00    	jmpq   *0x201a9a(%rip)        # 602020 <_GLOBAL_OFFSET_TABLE_+0x20>
  400586:	68 01 00 00 00       	pushq  $0x1
  40058b:	e9 d0 ff ff ff       	jmpq   400560 <_init+0x20>

0000000000400590 <strlen@plt>:
  400590:	ff 25 92 1a 20 00    	jmpq   *0x201a92(%rip)        # 602028 <_GLOBAL_OFFSET_TABLE_+0x28>
  400596:	68 02 00 00 00       	pushq  $0x2
  40059b:	e9 c0 ff ff ff       	jmpq   400560 <_init+0x20>

00000000004005a0 <__stack_chk_fail@plt>:
  4005a0:	ff 25 8a 1a 20 00    	jmpq   *0x201a8a(%rip)        # 602030 <_GLOBAL_OFFSET_TABLE_+0x30>
  4005a6:	68 03 00 00 00       	pushq  $0x3
  4005ab:	e9 b0 ff ff ff       	jmpq   400560 <_init+0x20>

00000000004005b0 <printf@plt>:
  4005b0:	ff 25 82 1a 20 00    	jmpq   *0x201a82(%rip)        # 602038 <_GLOBAL_OFFSET_TABLE_+0x38>
  4005b6:	68 04 00 00 00       	pushq  $0x4
  4005bb:	e9 a0 ff ff ff       	jmpq   400560 <_init+0x20>

00000000004005c0 <__libc_start_main@plt>:
  4005c0:	ff 25 7a 1a 20 00    	jmpq   *0x201a7a(%rip)        # 602040 <_GLOBAL_OFFSET_TABLE_+0x40>
  4005c6:	68 05 00 00 00       	pushq  $0x5
  4005cb:	e9 90 ff ff ff       	jmpq   400560 <_init+0x20>

00000000004005d0 <fopen@plt>:
  4005d0:	ff 25 72 1a 20 00    	jmpq   *0x201a72(%rip)        # 602048 <_GLOBAL_OFFSET_TABLE_+0x48>
  4005d6:	68 06 00 00 00       	pushq  $0x6
  4005db:	e9 80 ff ff ff       	jmpq   400560 <_init+0x20>

00000000004005e0 <fwrite@plt>:
  4005e0:	ff 25 6a 1a 20 00    	jmpq   *0x201a6a(%rip)        # 602050 <_GLOBAL_OFFSET_TABLE_+0x50>
  4005e6:	68 07 00 00 00       	pushq  $0x7
  4005eb:	e9 70 ff ff ff       	jmpq   400560 <_init+0x20>

Disassembly of section .plt.got:

00000000004005f0 <.plt.got>:
  4005f0:	ff 25 02 1a 20 00    	jmpq   *0x201a02(%rip)        # 601ff8 <_DYNAMIC+0x1d0>
  4005f6:	66 90                	xchg   %ax,%ax

Disassembly of section .text:

0000000000400600 <_start>:
  400600:	31 ed                	xor    %ebp,%ebp
  400602:	49 89 d1             	mov    %rdx,%r9
  400605:	5e                   	pop    %rsi
  400606:	48 89 e2             	mov    %rsp,%rdx
  400609:	48 83 e4 f0          	and    $0xfffffffffffffff0,%rsp
  40060d:	50                   	push   %rax
  40060e:	54                   	push   %rsp
  40060f:	49 c7 c0 20 0e 40 00 	mov    $0x400e20,%r8
  400616:	48 c7 c1 b0 0d 40 00 	mov    $0x400db0,%rcx
  40061d:	48 c7 c7 54 0d 40 00 	mov    $0x400d54,%rdi
  400624:	e8 97 ff ff ff       	callq  4005c0 <__libc_start_main@plt>
  400629:	f4                   	hlt    
  40062a:	66 0f 1f 44 00 00    	nopw   0x0(%rax,%rax,1)

0000000000400630 <deregister_tm_clones>:
  400630:	b8 6f 20 60 00       	mov    $0x60206f,%eax
  400635:	55                   	push   %rbp
  400636:	48 2d 68 20 60 00    	sub    $0x602068,%rax
  40063c:	48 83 f8 0e          	cmp    $0xe,%rax
  400640:	48 89 e5             	mov    %rsp,%rbp
  400643:	76 1b                	jbe    400660 <deregister_tm_clones+0x30>
  400645:	b8 00 00 00 00       	mov    $0x0,%eax
  40064a:	48 85 c0             	test   %rax,%rax
  40064d:	74 11                	je     400660 <deregister_tm_clones+0x30>
  40064f:	5d                   	pop    %rbp
  400650:	bf 68 20 60 00       	mov    $0x602068,%edi
  400655:	ff e0                	jmpq   *%rax
  400657:	66 0f 1f 84 00 00 00 	nopw   0x0(%rax,%rax,1)
  40065e:	00 00 
  400660:	5d                   	pop    %rbp
  400661:	c3                   	retq   
  400662:	0f 1f 40 00          	nopl   0x0(%rax)
  400666:	66 2e 0f 1f 84 00 00 	nopw   %cs:0x0(%rax,%rax,1)
  40066d:	00 00 00 

0000000000400670 <register_tm_clones>:
  400670:	be 68 20 60 00       	mov    $0x602068,%esi
  400675:	55                   	push   %rbp
  400676:	48 81 ee 68 20 60 00 	sub    $0x602068,%rsi
  40067d:	48 c1 fe 03          	sar    $0x3,%rsi
  400681:	48 89 e5             	mov    %rsp,%rbp
  400684:	48 89 f0             	mov    %rsi,%rax
  400687:	48 c1 e8 3f          	shr    $0x3f,%rax
  40068b:	48 01 c6             	add    %rax,%rsi
  40068e:	48 d1 fe             	sar    %rsi
  400691:	74 15                	je     4006a8 <register_tm_clones+0x38>
  400693:	b8 00 00 00 00       	mov    $0x0,%eax
  400698:	48 85 c0             	test   %rax,%rax
  40069b:	74 0b                	je     4006a8 <register_tm_clones+0x38>
  40069d:	5d                   	pop    %rbp
  40069e:	bf 68 20 60 00       	mov    $0x602068,%edi
  4006a3:	ff e0                	jmpq   *%rax
  4006a5:	0f 1f 00             	nopl   (%rax)
  4006a8:	5d                   	pop    %rbp
  4006a9:	c3                   	retq   
  4006aa:	66 0f 1f 44 00 00    	nopw   0x0(%rax,%rax,1)

00000000004006b0 <__do_global_dtors_aux>:
  4006b0:	80 3d c9 19 20 00 00 	cmpb   $0x0,0x2019c9(%rip)        # 602080 <completed.7585>
  4006b7:	75 11                	jne    4006ca <__do_global_dtors_aux+0x1a>
  4006b9:	55                   	push   %rbp
  4006ba:	48 89 e5             	mov    %rsp,%rbp
  4006bd:	e8 6e ff ff ff       	callq  400630 <deregister_tm_clones>
  4006c2:	5d                   	pop    %rbp
  4006c3:	c6 05 b6 19 20 00 01 	movb   $0x1,0x2019b6(%rip)        # 602080 <completed.7585>
  4006ca:	f3 c3                	repz retq 
  4006cc:	0f 1f 40 00          	nopl   0x0(%rax)

00000000004006d0 <frame_dummy>:
  4006d0:	bf 20 1e 60 00       	mov    $0x601e20,%edi
  4006d5:	48 83 3f 00          	cmpq   $0x0,(%rdi)
  4006d9:	75 05                	jne    4006e0 <frame_dummy+0x10>
  4006db:	eb 93                	jmp    400670 <register_tm_clones>
  4006dd:	0f 1f 00             	nopl   (%rax)
  4006e0:	b8 00 00 00 00       	mov    $0x0,%eax
  4006e5:	48 85 c0             	test   %rax,%rax
  4006e8:	74 f1                	je     4006db <frame_dummy+0xb>
  4006ea:	55                   	push   %rbp
  4006eb:	48 89 e5             	mov    %rsp,%rbp
  4006ee:	ff d0                	callq  *%rax
  4006f0:	5d                   	pop    %rbp
  4006f1:	e9 7a ff ff ff       	jmpq   400670 <register_tm_clones>

00000000004006f6 <rc4keysched>:
  4006f6:	55                   	push   %rbp
  4006f7:	48 89 e5             	mov    %rsp,%rbp
  4006fa:	48 83 ec 40          	sub    $0x40,%rsp
  4006fe:	48 89 7d d8          	mov    %rdi,-0x28(%rbp)
  400702:	48 89 75 d0          	mov    %rsi,-0x30(%rbp)
  400706:	48 89 55 c8          	mov    %rdx,-0x38(%rbp)
  40070a:	64 48 8b 04 25 28 00 	mov    %fs:0x28,%rax
  400711:	00 00 
  400713:	48 89 45 f8          	mov    %rax,-0x8(%rbp)
  400717:	31 c0                	xor    %eax,%eax
  400719:	c7 45 e8 00 00 00 00 	movl   $0x0,-0x18(%rbp)
  400720:	eb 16                	jmp    400738 <rc4keysched+0x42>
  400722:	8b 45 e8             	mov    -0x18(%rbp),%eax
  400725:	48 63 d0             	movslq %eax,%rdx
  400728:	48 8b 45 d8          	mov    -0x28(%rbp),%rax
  40072c:	48 01 d0             	add    %rdx,%rax
  40072f:	8b 55 e8             	mov    -0x18(%rbp),%edx
  400732:	88 10                	mov    %dl,(%rax)
  400734:	83 45 e8 01          	addl   $0x1,-0x18(%rbp)
  400738:	81 7d e8 ff 00 00 00 	cmpl   $0xff,-0x18(%rbp)
  40073f:	7e e1                	jle    400722 <rc4keysched+0x2c>
  400741:	c7 45 ec 00 00 00 00 	movl   $0x0,-0x14(%rbp)
  400748:	c7 45 f0 00 00 00 00 	movl   $0x0,-0x10(%rbp)
  40074f:	e9 96 00 00 00       	jmpq   4007ea <rc4keysched+0xf4>
  400754:	8b 45 f0             	mov    -0x10(%rbp),%eax
  400757:	48 63 d0             	movslq %eax,%rdx
  40075a:	48 8b 45 d8          	mov    -0x28(%rbp),%rax
  40075e:	48 01 d0             	add    %rdx,%rax
  400761:	0f b6 00             	movzbl (%rax),%eax
  400764:	0f b6 d0             	movzbl %al,%edx
  400767:	8b 45 ec             	mov    -0x14(%rbp),%eax
  40076a:	8d 0c 02             	lea    (%rdx,%rax,1),%ecx
  40076d:	8b 45 f0             	mov    -0x10(%rbp),%eax
  400770:	48 98                	cltq   
  400772:	ba 00 00 00 00       	mov    $0x0,%edx
  400777:	48 f7 75 c8          	divq   -0x38(%rbp)
  40077b:	48 8b 45 d0          	mov    -0x30(%rbp),%rax
  40077f:	48 01 d0             	add    %rdx,%rax
  400782:	0f b6 00             	movzbl (%rax),%eax
  400785:	0f b6 c0             	movzbl %al,%eax
  400788:	8d 14 01             	lea    (%rcx,%rax,1),%edx
  40078b:	89 d0                	mov    %edx,%eax
  40078d:	c1 f8 1f             	sar    $0x1f,%eax
  400790:	c1 e8 18             	shr    $0x18,%eax
  400793:	01 c2                	add    %eax,%edx
  400795:	0f b6 d2             	movzbl %dl,%edx
  400798:	29 c2                	sub    %eax,%edx
  40079a:	89 d0                	mov    %edx,%eax
  40079c:	89 45 ec             	mov    %eax,-0x14(%rbp)
  40079f:	8b 45 f0             	mov    -0x10(%rbp),%eax
  4007a2:	48 63 d0             	movslq %eax,%rdx
  4007a5:	48 8b 45 d8          	mov    -0x28(%rbp),%rax
  4007a9:	48 01 d0             	add    %rdx,%rax
  4007ac:	0f b6 00             	movzbl (%rax),%eax
  4007af:	0f b6 c0             	movzbl %al,%eax
  4007b2:	89 45 f4             	mov    %eax,-0xc(%rbp)
  4007b5:	8b 45 f0             	mov    -0x10(%rbp),%eax
  4007b8:	48 63 d0             	movslq %eax,%rdx
  4007bb:	48 8b 45 d8          	mov    -0x28(%rbp),%rax
  4007bf:	48 01 c2             	add    %rax,%rdx
  4007c2:	8b 45 ec             	mov    -0x14(%rbp),%eax
  4007c5:	48 63 c8             	movslq %eax,%rcx
  4007c8:	48 8b 45 d8          	mov    -0x28(%rbp),%rax
  4007cc:	48 01 c8             	add    %rcx,%rax
  4007cf:	0f b6 00             	movzbl (%rax),%eax
  4007d2:	88 02                	mov    %al,(%rdx)
  4007d4:	8b 45 ec             	mov    -0x14(%rbp),%eax
  4007d7:	48 63 d0             	movslq %eax,%rdx
  4007da:	48 8b 45 d8          	mov    -0x28(%rbp),%rax
  4007de:	48 01 d0             	add    %rdx,%rax
  4007e1:	8b 55 f4             	mov    -0xc(%rbp),%edx
  4007e4:	88 10                	mov    %dl,(%rax)
  4007e6:	83 45 f0 01          	addl   $0x1,-0x10(%rbp)
  4007ea:	81 7d f0 ff 00 00 00 	cmpl   $0xff,-0x10(%rbp)
  4007f1:	0f 8e 5d ff ff ff    	jle    400754 <rc4keysched+0x5e>
  4007f7:	90                   	nop
  4007f8:	48 8b 45 f8          	mov    -0x8(%rbp),%rax
  4007fc:	64 48 33 04 25 28 00 	xor    %fs:0x28,%rax
  400803:	00 00 
  400805:	74 05                	je     40080c <rc4keysched+0x116>
  400807:	e8 94 fd ff ff       	callq  4005a0 <__stack_chk_fail@plt>
  40080c:	c9                   	leaveq 
  40080d:	c3                   	retq   

000000000040080e <rc4rand>:
  40080e:	55                   	push   %rbp
  40080f:	48 89 e5             	mov    %rsp,%rbp
  400812:	48 83 ec 30          	sub    $0x30,%rsp
  400816:	48 89 7d e8          	mov    %rdi,-0x18(%rbp)
  40081a:	48 89 75 e0          	mov    %rsi,-0x20(%rbp)
  40081e:	48 89 55 d8          	mov    %rdx,-0x28(%rbp)
  400822:	64 48 8b 04 25 28 00 	mov    %fs:0x28,%rax
  400829:	00 00 
  40082b:	48 89 45 f8          	mov    %rax,-0x8(%rbp)
  40082f:	31 c0                	xor    %eax,%eax
  400831:	48 8b 45 e0          	mov    -0x20(%rbp),%rax
  400835:	8b 00                	mov    (%rax),%eax
  400837:	8d 50 01             	lea    0x1(%rax),%edx
  40083a:	89 d0                	mov    %edx,%eax
  40083c:	c1 f8 1f             	sar    $0x1f,%eax
  40083f:	c1 e8 18             	shr    $0x18,%eax
  400842:	01 c2                	add    %eax,%edx
  400844:	0f b6 d2             	movzbl %dl,%edx
  400847:	29 c2                	sub    %eax,%edx
  400849:	89 d0                	mov    %edx,%eax
  40084b:	89 c2                	mov    %eax,%edx
  40084d:	48 8b 45 e0          	mov    -0x20(%rbp),%rax
  400851:	89 10                	mov    %edx,(%rax)
  400853:	48 8b 45 d8          	mov    -0x28(%rbp),%rax
  400857:	8b 10                	mov    (%rax),%edx
  400859:	48 8b 45 e0          	mov    -0x20(%rbp),%rax
  40085d:	8b 00                	mov    (%rax),%eax
  40085f:	48 63 c8             	movslq %eax,%rcx
  400862:	48 8b 45 e8          	mov    -0x18(%rbp),%rax
  400866:	48 01 c8             	add    %rcx,%rax
  400869:	0f b6 00             	movzbl (%rax),%eax
  40086c:	0f b6 c0             	movzbl %al,%eax
  40086f:	01 c2                	add    %eax,%edx
  400871:	89 d0                	mov    %edx,%eax
  400873:	c1 f8 1f             	sar    $0x1f,%eax
  400876:	c1 e8 18             	shr    $0x18,%eax
  400879:	01 c2                	add    %eax,%edx
  40087b:	0f b6 d2             	movzbl %dl,%edx
  40087e:	29 c2                	sub    %eax,%edx
  400880:	89 d0                	mov    %edx,%eax
  400882:	89 c2                	mov    %eax,%edx
  400884:	48 8b 45 d8          	mov    -0x28(%rbp),%rax
  400888:	89 10                	mov    %edx,(%rax)
  40088a:	48 8b 45 e0          	mov    -0x20(%rbp),%rax
  40088e:	8b 00                	mov    (%rax),%eax
  400890:	48 63 d0             	movslq %eax,%rdx
  400893:	48 8b 45 e8          	mov    -0x18(%rbp),%rax
  400897:	48 01 d0             	add    %rdx,%rax
  40089a:	0f b6 00             	movzbl (%rax),%eax
  40089d:	0f b6 c0             	movzbl %al,%eax
  4008a0:	89 45 f4             	mov    %eax,-0xc(%rbp)
  4008a3:	48 8b 45 e0          	mov    -0x20(%rbp),%rax
  4008a7:	8b 00                	mov    (%rax),%eax
  4008a9:	48 63 d0             	movslq %eax,%rdx
  4008ac:	48 8b 45 e8          	mov    -0x18(%rbp),%rax
  4008b0:	48 01 c2             	add    %rax,%rdx
  4008b3:	48 8b 45 d8          	mov    -0x28(%rbp),%rax
  4008b7:	8b 00                	mov    (%rax),%eax
  4008b9:	48 63 c8             	movslq %eax,%rcx
  4008bc:	48 8b 45 e8          	mov    -0x18(%rbp),%rax
  4008c0:	48 01 c8             	add    %rcx,%rax
  4008c3:	0f b6 00             	movzbl (%rax),%eax
  4008c6:	88 02                	mov    %al,(%rdx)
  4008c8:	48 8b 45 d8          	mov    -0x28(%rbp),%rax
  4008cc:	8b 00                	mov    (%rax),%eax
  4008ce:	48 63 d0             	movslq %eax,%rdx
  4008d1:	48 8b 45 e8          	mov    -0x18(%rbp),%rax
  4008d5:	48 01 d0             	add    %rdx,%rax
  4008d8:	8b 55 f4             	mov    -0xc(%rbp),%edx
  4008db:	88 10                	mov    %dl,(%rax)
  4008dd:	48 8b 45 e0          	mov    -0x20(%rbp),%rax
  4008e1:	8b 00                	mov    (%rax),%eax
  4008e3:	48 63 d0             	movslq %eax,%rdx
  4008e6:	48 8b 45 e8          	mov    -0x18(%rbp),%rax
  4008ea:	48 01 d0             	add    %rdx,%rax
  4008ed:	0f b6 00             	movzbl (%rax),%eax
  4008f0:	0f b6 d0             	movzbl %al,%edx
  4008f3:	48 8b 45 d8          	mov    -0x28(%rbp),%rax
  4008f7:	8b 00                	mov    (%rax),%eax
  4008f9:	48 63 c8             	movslq %eax,%rcx
  4008fc:	48 8b 45 e8          	mov    -0x18(%rbp),%rax
  400900:	48 01 c8             	add    %rcx,%rax
  400903:	0f b6 00             	movzbl (%rax),%eax
  400906:	0f b6 c0             	movzbl %al,%eax
  400909:	01 d0                	add    %edx,%eax
  40090b:	48 98                	cltq   
  40090d:	0f b6 d0             	movzbl %al,%edx
  400910:	48 8b 45 e8          	mov    -0x18(%rbp),%rax
  400914:	48 01 d0             	add    %rdx,%rax
  400917:	0f b6 00             	movzbl (%rax),%eax
  40091a:	48 8b 75 f8          	mov    -0x8(%rbp),%rsi
  40091e:	64 48 33 34 25 28 00 	xor    %fs:0x28,%rsi
  400925:	00 00 
  400927:	74 05                	je     40092e <rc4rand+0x120>
  400929:	e8 72 fc ff ff       	callq  4005a0 <__stack_chk_fail@plt>
  40092e:	c9                   	leaveq 
  40092f:	c3                   	retq   

0000000000400930 <encrypt>:
  400930:	55                   	push   %rbp
  400931:	48 89 e5             	mov    %rsp,%rbp
  400934:	41 54                	push   %r12
  400936:	53                   	push   %rbx
  400937:	48 81 ec 40 01 00 00 	sub    $0x140,%rsp
  40093e:	48 89 bd c8 fe ff ff 	mov    %rdi,-0x138(%rbp)
  400945:	48 89 b5 c0 fe ff ff 	mov    %rsi,-0x140(%rbp)
  40094c:	48 89 95 b8 fe ff ff 	mov    %rdx,-0x148(%rbp)
  400953:	48 89 8d b0 fe ff ff 	mov    %rcx,-0x150(%rbp)
  40095a:	64 48 8b 04 25 28 00 	mov    %fs:0x28,%rax
  400961:	00 00 
  400963:	48 89 45 e8          	mov    %rax,-0x18(%rbp)
  400967:	31 c0                	xor    %eax,%eax
  400969:	48 8b 95 b0 fe ff ff 	mov    -0x150(%rbp),%rdx
  400970:	48 8b 8d b8 fe ff ff 	mov    -0x148(%rbp),%rcx
  400977:	48 8d 85 e0 fe ff ff 	lea    -0x120(%rbp),%rax
  40097e:	48 89 ce             	mov    %rcx,%rsi
  400981:	48 89 c7             	mov    %rax,%rdi
  400984:	e8 6d fd ff ff       	callq  4006f6 <rc4keysched>
  400989:	c7 85 d4 fe ff ff 00 	movl   $0x0,-0x12c(%rbp)
  400990:	00 00 00 
  400993:	c7 85 d8 fe ff ff 00 	movl   $0x0,-0x128(%rbp)
  40099a:	00 00 00 
  40099d:	c7 85 dc fe ff ff 00 	movl   $0x0,-0x124(%rbp)
  4009a4:	00 00 00 
  4009a7:	eb 63                	jmp    400a0c <encrypt+0xdc>
  4009a9:	8b 85 dc fe ff ff    	mov    -0x124(%rbp),%eax
  4009af:	48 63 d0             	movslq %eax,%rdx
  4009b2:	48 8b 85 c8 fe ff ff 	mov    -0x138(%rbp),%rax
  4009b9:	48 8d 1c 02          	lea    (%rdx,%rax,1),%rbx
  4009bd:	8b 85 dc fe ff ff    	mov    -0x124(%rbp),%eax
  4009c3:	48 63 d0             	movslq %eax,%rdx
  4009c6:	48 8b 85 c8 fe ff ff 	mov    -0x138(%rbp),%rax
  4009cd:	48 01 d0             	add    %rdx,%rax
  4009d0:	0f b6 00             	movzbl (%rax),%eax
  4009d3:	41 89 c4             	mov    %eax,%r12d
  4009d6:	48 8d 95 d8 fe ff ff 	lea    -0x128(%rbp),%rdx
  4009dd:	48 8d 8d d4 fe ff ff 	lea    -0x12c(%rbp),%rcx
  4009e4:	48 8d 85 e0 fe ff ff 	lea    -0x120(%rbp),%rax
  4009eb:	48 89 ce             	mov    %rcx,%rsi
  4009ee:	48 89 c7             	mov    %rax,%rdi
  4009f1:	e8 18 fe ff ff       	callq  40080e <rc4rand>
  4009f6:	44 31 e0             	xor    %r12d,%eax
  4009f9:	89 c2                	mov    %eax,%edx
  4009fb:	8b 85 dc fe ff ff    	mov    -0x124(%rbp),%eax
  400a01:	01 d0                	add    %edx,%eax
  400a03:	88 03                	mov    %al,(%rbx)
  400a05:	83 85 dc fe ff ff 01 	addl   $0x1,-0x124(%rbp)
  400a0c:	48 8b 85 c0 fe ff ff 	mov    -0x140(%rbp),%rax
  400a13:	3b 85 dc fe ff ff    	cmp    -0x124(%rbp),%eax
  400a19:	7f 8e                	jg     4009a9 <encrypt+0x79>
  400a1b:	90                   	nop
  400a1c:	48 8b 45 e8          	mov    -0x18(%rbp),%rax
  400a20:	64 48 33 04 25 28 00 	xor    %fs:0x28,%rax
  400a27:	00 00 
  400a29:	74 05                	je     400a30 <encrypt+0x100>
  400a2b:	e8 70 fb ff ff       	callq  4005a0 <__stack_chk_fail@plt>
  400a30:	48 81 c4 40 01 00 00 	add    $0x140,%rsp
  400a37:	5b                   	pop    %rbx
  400a38:	41 5c                	pop    %r12
  400a3a:	5d                   	pop    %rbp
  400a3b:	c3                   	retq   

0000000000400a3c <decrypt>:
  400a3c:	55                   	push   %rbp
  400a3d:	48 89 e5             	mov    %rsp,%rbp
  400a40:	41 54                	push   %r12
  400a42:	53                   	push   %rbx
  400a43:	48 81 ec 40 01 00 00 	sub    $0x140,%rsp
  400a4a:	48 89 bd c8 fe ff ff 	mov    %rdi,-0x138(%rbp)
  400a51:	48 89 b5 c0 fe ff ff 	mov    %rsi,-0x140(%rbp)
  400a58:	48 89 95 b8 fe ff ff 	mov    %rdx,-0x148(%rbp)
  400a5f:	48 89 8d b0 fe ff ff 	mov    %rcx,-0x150(%rbp)
  400a66:	64 48 8b 04 25 28 00 	mov    %fs:0x28,%rax
  400a6d:	00 00 
  400a6f:	48 89 45 e8          	mov    %rax,-0x18(%rbp)
  400a73:	31 c0                	xor    %eax,%eax
  400a75:	48 8b 95 b0 fe ff ff 	mov    -0x150(%rbp),%rdx
  400a7c:	48 8b 8d b8 fe ff ff 	mov    -0x148(%rbp),%rcx
  400a83:	48 8d 85 e0 fe ff ff 	lea    -0x120(%rbp),%rax
  400a8a:	48 89 ce             	mov    %rcx,%rsi
  400a8d:	48 89 c7             	mov    %rax,%rdi
  400a90:	e8 61 fc ff ff       	callq  4006f6 <rc4keysched>
  400a95:	c7 85 d4 fe ff ff 00 	movl   $0x0,-0x12c(%rbp)
  400a9c:	00 00 00 
  400a9f:	c7 85 d8 fe ff ff 00 	movl   $0x0,-0x128(%rbp)
  400aa6:	00 00 00 
  400aa9:	c7 85 dc fe ff ff 00 	movl   $0x0,-0x124(%rbp)
  400ab0:	00 00 00 
  400ab3:	eb 61                	jmp    400b16 <decrypt+0xda>
  400ab5:	8b 85 dc fe ff ff    	mov    -0x124(%rbp),%eax
  400abb:	48 63 d0             	movslq %eax,%rdx
  400abe:	48 8b 85 c8 fe ff ff 	mov    -0x138(%rbp),%rax
  400ac5:	48 8d 1c 02          	lea    (%rdx,%rax,1),%rbx
  400ac9:	8b 85 dc fe ff ff    	mov    -0x124(%rbp),%eax
  400acf:	48 63 d0             	movslq %eax,%rdx
  400ad2:	48 8b 85 c8 fe ff ff 	mov    -0x138(%rbp),%rax
  400ad9:	48 01 d0             	add    %rdx,%rax
  400adc:	0f b6 00             	movzbl (%rax),%eax
  400adf:	8b 95 dc fe ff ff    	mov    -0x124(%rbp),%edx
  400ae5:	29 d0                	sub    %edx,%eax
  400ae7:	41 89 c4             	mov    %eax,%r12d
  400aea:	48 8d 95 d8 fe ff ff 	lea    -0x128(%rbp),%rdx
  400af1:	48 8d 8d d4 fe ff ff 	lea    -0x12c(%rbp),%rcx
  400af8:	48 8d 85 e0 fe ff ff 	lea    -0x120(%rbp),%rax
  400aff:	48 89 ce             	mov    %rcx,%rsi
  400b02:	48 89 c7             	mov    %rax,%rdi
  400b05:	e8 04 fd ff ff       	callq  40080e <rc4rand>
  400b0a:	44 31 e0             	xor    %r12d,%eax
  400b0d:	88 03                	mov    %al,(%rbx)
  400b0f:	83 85 dc fe ff ff 01 	addl   $0x1,-0x124(%rbp)
  400b16:	48 8b 85 c0 fe ff ff 	mov    -0x140(%rbp),%rax
  400b1d:	3b 85 dc fe ff ff    	cmp    -0x124(%rbp),%eax
  400b23:	7f 90                	jg     400ab5 <decrypt+0x79>
  400b25:	90                   	nop
  400b26:	48 8b 45 e8          	mov    -0x18(%rbp),%rax
  400b2a:	64 48 33 04 25 28 00 	xor    %fs:0x28,%rax
  400b31:	00 00 
  400b33:	74 05                	je     400b3a <decrypt+0xfe>
  400b35:	e8 66 fa ff ff       	callq  4005a0 <__stack_chk_fail@plt>
  400b3a:	48 81 c4 40 01 00 00 	add    $0x140,%rsp
  400b41:	5b                   	pop    %rbx
  400b42:	41 5c                	pop    %r12
  400b44:	5d                   	pop    %rbp
  400b45:	c3                   	retq   

0000000000400b46 <usage>:
  400b46:	55                   	push   %rbp
  400b47:	48 89 e5             	mov    %rsp,%rbp
  400b4a:	48 83 ec 20          	sub    $0x20,%rsp
  400b4e:	48 89 7d e8          	mov    %rdi,-0x18(%rbp)
  400b52:	64 48 8b 04 25 28 00 	mov    %fs:0x28,%rax
  400b59:	00 00 
  400b5b:	48 89 45 f8          	mov    %rax,-0x8(%rbp)
  400b5f:	31 c0                	xor    %eax,%eax
  400b61:	48 8b 45 e8          	mov    -0x18(%rbp),%rax
  400b65:	48 89 c6             	mov    %rax,%rsi
  400b68:	bf 38 0e 40 00       	mov    $0x400e38,%edi
  400b6d:	b8 00 00 00 00       	mov    $0x0,%eax
  400b72:	e8 39 fa ff ff       	callq  4005b0 <printf@plt>
  400b77:	b8 01 00 00 00       	mov    $0x1,%eax
  400b7c:	48 8b 55 f8          	mov    -0x8(%rbp),%rdx
  400b80:	64 48 33 14 25 28 00 	xor    %fs:0x28,%rdx
  400b87:	00 00 
  400b89:	74 05                	je     400b90 <usage+0x4a>
  400b8b:	e8 10 fa ff ff       	callq  4005a0 <__stack_chk_fail@plt>
  400b90:	c9                   	leaveq 
  400b91:	c3                   	retq   

0000000000400b92 <real_main>:
  400b92:	55                   	push   %rbp
  400b93:	48 89 e5             	mov    %rsp,%rbp
  400b96:	48 83 ec 50          	sub    $0x50,%rsp
  400b9a:	89 7d cc             	mov    %edi,-0x34(%rbp)
  400b9d:	48 89 75 c0          	mov    %rsi,-0x40(%rbp)
  400ba1:	48 89 55 b8          	mov    %rdx,-0x48(%rbp)
  400ba5:	64 48 8b 04 25 28 00 	mov    %fs:0x28,%rax
  400bac:	00 00 
  400bae:	48 89 45 f8          	mov    %rax,-0x8(%rbp)
  400bb2:	31 c0                	xor    %eax,%eax
  400bb4:	83 7d cc 03          	cmpl   $0x3,-0x34(%rbp)
  400bb8:	0f 94 c0             	sete   %al
  400bbb:	88 45 db             	mov    %al,-0x25(%rbp)
  400bbe:	83 7d cc 04          	cmpl   $0x4,-0x34(%rbp)
  400bc2:	74 1a                	je     400bde <real_main+0x4c>
  400bc4:	83 7d cc 03          	cmpl   $0x3,-0x34(%rbp)
  400bc8:	74 14                	je     400bde <real_main+0x4c>
  400bca:	48 8b 45 c0          	mov    -0x40(%rbp),%rax
  400bce:	48 8b 00             	mov    (%rax),%rax
  400bd1:	48 89 c7             	mov    %rax,%rdi
  400bd4:	e8 6d ff ff ff       	callq  400b46 <usage>
  400bd9:	e9 60 01 00 00       	jmpq   400d3e <real_main+0x1ac>
  400bde:	48 8b 45 c0          	mov    -0x40(%rbp),%rax
  400be2:	48 83 c0 10          	add    $0x10,%rax
  400be6:	48 8b 00             	mov    (%rax),%rax
  400be9:	be 58 0e 40 00       	mov    $0x400e58,%esi
  400bee:	48 89 c7             	mov    %rax,%rdi
  400bf1:	e8 da f9 ff ff       	callq  4005d0 <fopen@plt>
  400bf6:	48 89 45 e8          	mov    %rax,-0x18(%rbp)
  400bfa:	48 c7 45 e0 00 00 00 	movq   $0x0,-0x20(%rbp)
  400c01:	00 
  400c02:	0f b6 45 db          	movzbl -0x25(%rbp),%eax
  400c06:	83 f0 01             	xor    $0x1,%eax
  400c09:	84 c0                	test   %al,%al
  400c0b:	74 1c                	je     400c29 <real_main+0x97>
  400c0d:	48 8b 45 c0          	mov    -0x40(%rbp),%rax
  400c11:	48 83 c0 18          	add    $0x18,%rax
  400c15:	48 8b 00             	mov    (%rax),%rax
  400c18:	be 5b 0e 40 00       	mov    $0x400e5b,%esi
  400c1d:	48 89 c7             	mov    %rax,%rdi
  400c20:	e8 ab f9 ff ff       	callq  4005d0 <fopen@plt>
  400c25:	48 89 45 e0          	mov    %rax,-0x20(%rbp)
  400c29:	48 83 7d e8 00       	cmpq   $0x0,-0x18(%rbp)
  400c2e:	74 1a                	je     400c4a <real_main+0xb8>
  400c30:	48 83 7d e0 00       	cmpq   $0x0,-0x20(%rbp)
  400c35:	0f 85 d4 00 00 00    	jne    400d0f <real_main+0x17d>
  400c3b:	0f b6 45 db          	movzbl -0x25(%rbp),%eax
  400c3f:	83 f0 01             	xor    $0x1,%eax
  400c42:	84 c0                	test   %al,%al
  400c44:	0f 84 c5 00 00 00    	je     400d0f <real_main+0x17d>
  400c4a:	48 8b 45 c0          	mov    -0x40(%rbp),%rax
  400c4e:	48 8b 00             	mov    (%rax),%rax
  400c51:	48 89 c7             	mov    %rax,%rdi
  400c54:	e8 ed fe ff ff       	callq  400b46 <usage>
  400c59:	e9 e0 00 00 00       	jmpq   400d3e <real_main+0x1ac>
  400c5e:	48 8b 45 c0          	mov    -0x40(%rbp),%rax
  400c62:	48 83 c0 08          	add    $0x8,%rax
  400c66:	48 8b 00             	mov    (%rax),%rax
  400c69:	48 89 c7             	mov    %rax,%rdi
  400c6c:	e8 1f f9 ff ff       	callq  400590 <strlen@plt>
  400c71:	48 89 c1             	mov    %rax,%rcx
  400c74:	48 8b 45 c0          	mov    -0x40(%rbp),%rax
  400c78:	48 83 c0 08          	add    $0x8,%rax
  400c7c:	48 8b 10             	mov    (%rax),%rdx
  400c7f:	48 8b 75 f0          	mov    -0x10(%rbp),%rsi
  400c83:	48 8b 45 b8          	mov    -0x48(%rbp),%rax
  400c87:	bf a0 20 60 00       	mov    $0x6020a0,%edi
  400c8c:	ff d0                	callq  *%rax
  400c8e:	80 7d db 00          	cmpb   $0x0,-0x25(%rbp)
  400c92:	74 5e                	je     400cf2 <real_main+0x160>
  400c94:	c7 45 dc 00 00 00 00 	movl   $0x0,-0x24(%rbp)
  400c9b:	eb 4a                	jmp    400ce7 <real_main+0x155>
  400c9d:	8b 45 dc             	mov    -0x24(%rbp),%eax
  400ca0:	48 98                	cltq   
  400ca2:	0f b6 80 a0 20 60 00 	movzbl 0x6020a0(%rax),%eax
  400ca9:	0f b6 c0             	movzbl %al,%eax
  400cac:	89 c6                	mov    %eax,%esi
  400cae:	bf 5e 0e 40 00       	mov    $0x400e5e,%edi
  400cb3:	b8 00 00 00 00       	mov    $0x0,%eax
  400cb8:	e8 f3 f8 ff ff       	callq  4005b0 <printf@plt>
  400cbd:	8b 45 dc             	mov    -0x24(%rbp),%eax
  400cc0:	99                   	cltd   
  400cc1:	c1 ea 1c             	shr    $0x1c,%edx
  400cc4:	01 d0                	add    %edx,%eax
  400cc6:	83 e0 0f             	and    $0xf,%eax
  400cc9:	29 d0                	sub    %edx,%eax
  400ccb:	83 f8 0f             	cmp    $0xf,%eax
  400cce:	75 07                	jne    400cd7 <real_main+0x145>
  400cd0:	b8 0a 00 00 00       	mov    $0xa,%eax
  400cd5:	eb 05                	jmp    400cdc <real_main+0x14a>
  400cd7:	b8 20 00 00 00       	mov    $0x20,%eax
  400cdc:	89 c7                	mov    %eax,%edi
  400cde:	e8 8d f8 ff ff       	callq  400570 <putchar@plt>
  400ce3:	83 45 dc 01          	addl   $0x1,-0x24(%rbp)
  400ce7:	48 8b 45 f0          	mov    -0x10(%rbp),%rax
  400ceb:	3b 45 dc             	cmp    -0x24(%rbp),%eax
  400cee:	7f ad                	jg     400c9d <real_main+0x10b>
  400cf0:	eb 1d                	jmp    400d0f <real_main+0x17d>
  400cf2:	48 8b 55 e0          	mov    -0x20(%rbp),%rdx
  400cf6:	48 8b 45 f0          	mov    -0x10(%rbp),%rax
  400cfa:	48 89 d1             	mov    %rdx,%rcx
  400cfd:	48 89 c2             	mov    %rax,%rdx
  400d00:	be 01 00 00 00       	mov    $0x1,%esi
  400d05:	bf a0 20 60 00       	mov    $0x6020a0,%edi
  400d0a:	e8 d1 f8 ff ff       	callq  4005e0 <fwrite@plt>
  400d0f:	48 8b 45 e8          	mov    -0x18(%rbp),%rax
  400d13:	48 89 c1             	mov    %rax,%rcx
  400d16:	ba 00 00 01 00       	mov    $0x10000,%edx
  400d1b:	be 01 00 00 00       	mov    $0x1,%esi
  400d20:	bf a0 20 60 00       	mov    $0x6020a0,%edi
  400d25:	e8 56 f8 ff ff       	callq  400580 <fread@plt>
  400d2a:	48 89 45 f0          	mov    %rax,-0x10(%rbp)
  400d2e:	48 83 7d f0 00       	cmpq   $0x0,-0x10(%rbp)
  400d33:	0f 85 25 ff ff ff    	jne    400c5e <real_main+0xcc>
  400d39:	b8 00 00 00 00       	mov    $0x0,%eax
  400d3e:	48 8b 4d f8          	mov    -0x8(%rbp),%rcx
  400d42:	64 48 33 0c 25 28 00 	xor    %fs:0x28,%rcx
  400d49:	00 00 
  400d4b:	74 05                	je     400d52 <real_main+0x1c0>
  400d4d:	e8 4e f8 ff ff       	callq  4005a0 <__stack_chk_fail@plt>
  400d52:	c9                   	leaveq 
  400d53:	c3                   	retq   

0000000000400d54 <main>:
  400d54:	55                   	push   %rbp
  400d55:	48 89 e5             	mov    %rsp,%rbp
  400d58:	48 83 ec 20          	sub    $0x20,%rsp
  400d5c:	89 7d ec             	mov    %edi,-0x14(%rbp)
  400d5f:	48 89 75 e0          	mov    %rsi,-0x20(%rbp)
  400d63:	64 48 8b 04 25 28 00 	mov    %fs:0x28,%rax
  400d6a:	00 00 
  400d6c:	48 89 45 f8          	mov    %rax,-0x8(%rbp)
  400d70:	31 c0                	xor    %eax,%eax
  400d72:	48 8b 4d e0          	mov    -0x20(%rbp),%rcx
  400d76:	8b 45 ec             	mov    -0x14(%rbp),%eax
  400d79:	ba 30 09 40 00       	mov    $0x400930,%edx
  400d7e:	48 89 ce             	mov    %rcx,%rsi
  400d81:	89 c7                	mov    %eax,%edi
  400d83:	e8 0a fe ff ff       	callq  400b92 <real_main>
  400d88:	b8 00 00 00 00       	mov    $0x0,%eax
  400d8d:	48 8b 55 f8          	mov    -0x8(%rbp),%rdx
  400d91:	64 48 33 14 25 28 00 	xor    %fs:0x28,%rdx
  400d98:	00 00 
  400d9a:	74 05                	je     400da1 <main+0x4d>
  400d9c:	e8 ff f7 ff ff       	callq  4005a0 <__stack_chk_fail@plt>
  400da1:	c9                   	leaveq 
  400da2:	c3                   	retq   
  400da3:	66 2e 0f 1f 84 00 00 	nopw   %cs:0x0(%rax,%rax,1)
  400daa:	00 00 00 
  400dad:	0f 1f 00             	nopl   (%rax)

0000000000400db0 <__libc_csu_init>:
  400db0:	41 57                	push   %r15
  400db2:	41 56                	push   %r14
  400db4:	41 89 ff             	mov    %edi,%r15d
  400db7:	41 55                	push   %r13
  400db9:	41 54                	push   %r12
  400dbb:	4c 8d 25 4e 10 20 00 	lea    0x20104e(%rip),%r12        # 601e10 <__frame_dummy_init_array_entry>
  400dc2:	55                   	push   %rbp
  400dc3:	48 8d 2d 4e 10 20 00 	lea    0x20104e(%rip),%rbp        # 601e18 <__init_array_end>
  400dca:	53                   	push   %rbx
  400dcb:	49 89 f6             	mov    %rsi,%r14
  400dce:	49 89 d5             	mov    %rdx,%r13
  400dd1:	4c 29 e5             	sub    %r12,%rbp
  400dd4:	48 83 ec 08          	sub    $0x8,%rsp
  400dd8:	48 c1 fd 03          	sar    $0x3,%rbp
  400ddc:	e8 5f f7 ff ff       	callq  400540 <_init>
  400de1:	48 85 ed             	test   %rbp,%rbp
  400de4:	74 20                	je     400e06 <__libc_csu_init+0x56>
  400de6:	31 db                	xor    %ebx,%ebx
  400de8:	0f 1f 84 00 00 00 00 	nopl   0x0(%rax,%rax,1)
  400def:	00 
  400df0:	4c 89 ea             	mov    %r13,%rdx
  400df3:	4c 89 f6             	mov    %r14,%rsi
  400df6:	44 89 ff             	mov    %r15d,%edi
  400df9:	41 ff 14 dc          	callq  *(%r12,%rbx,8)
  400dfd:	48 83 c3 01          	add    $0x1,%rbx
  400e01:	48 39 eb             	cmp    %rbp,%rbx
  400e04:	75 ea                	jne    400df0 <__libc_csu_init+0x40>
  400e06:	48 83 c4 08          	add    $0x8,%rsp
  400e0a:	5b                   	pop    %rbx
  400e0b:	5d                   	pop    %rbp
  400e0c:	41 5c                	pop    %r12
  400e0e:	41 5d                	pop    %r13
  400e10:	41 5e                	pop    %r14
  400e12:	41 5f                	pop    %r15
  400e14:	c3                   	retq   
  400e15:	90                   	nop
  400e16:	66 2e 0f 1f 84 00 00 	nopw   %cs:0x0(%rax,%rax,1)
  400e1d:	00 00 00 

0000000000400e20 <__libc_csu_fini>:
  400e20:	f3 c3                	repz retq 

Disassembly of section .fini:

0000000000400e24 <_fini>:
  400e24:	48 83 ec 08          	sub    $0x8,%rsp
  400e28:	48 83 c4 08          	add    $0x8,%rsp
  400e2c:	c3                   	retq   
